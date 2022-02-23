const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users from db
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exlcude: ['password'] },
  })
  .then(dbUserData => {res.json(dbUserData)})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// get one user by id
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password']},
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: Post,
    //     attributes: [
    //       'id',
    //       'post_title',
    //       'post_text',
    //       'created_at'
    //     ]
    //   },
    //   {
    //     model: Comment,
    //     attributes: [
    //       'id',
    //       'comment_text',
    //       'created_at'
    //     ],
    //     include: {
    //       model: Post,
    //       attributes: ['title']
    //     }
    //   }
    // ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// add a new user with info from req.body
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;