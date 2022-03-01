const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', (req, res) => {
  Post.findAll({
    // sort by most recent
    order: [['created_at', 'DESC']],
    attributes: [
      'id',
      'post_title',
      'post_text',
      'created_at'
    ],
    // include comments for post and user
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  // respond with posts or if error, respond with status 500 and error message
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// get post by id
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_title',
      'post_text',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: [
          'id',
          'comment_text',
          'post_id',
          'user_id',
          'created_at'
        ],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post with this id' })
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create new post
router.post('/', withAuth, (req, res) => {
  // post values from request body
  Post.create({
    post_title: req.body.post_title,
    post_text: req.body.post_text,
    // pull user id from user's session
    user_id: req.session.user_id
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// edit post
router.put('/:id', withAuth, (req, res) => {
  // pull values from request body
  Post.update(
    {
      post_title: req.body.post_title,
      post_text: req.body.post_text
    },
    {
      // match post id from query paramaters
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

// delete post
router.delete('/:id', withAuth, async (req, res) => {
  // pull id for post to destroy from query paramaters
  await Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;