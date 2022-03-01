const router = require('express').Router();
const { User, Post, Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) => {
  Comment.findAll({
    attributes: [
      'id',
      'comment_text',
      'user_id',
      'post_id'
    ],
    // sort by most recent
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attribute: ['username']
      },
      {
        model: Post,
        attributes: ['post_title']
      }
    ]
  })
  // respond with comment data or send 500 status and error message
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get one comment by id
router.get('/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'comment_text', 'user_id', 'post_id'],
    include: [
      {
        model: User,
        attribute: ['username'],
      },
      {
        model: Post,
        attributes: ['post_title'],
      },
    ],
  })
  .then(dbCommentData => {
    if (!dbCommentData) {
      res.status(404).json({ message: 'No comment with this id' })
      return;
    }
    res.json(dbCommentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// add new comment
router.post('/', withAuth, (req, res) => {
  // pull values from body of req
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // id pulled from session
      user_id: req.session.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
});

module.exports = router;