const router = require('express').Router();
const { Post, User, Comment } = require('../models')
// const sequelize = require('../config/connection');
const { getAllPosts, getPostById } = require('../utils/dbCalls')

router.get('/', async (req, res) => {
    await getAllPosts()
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      posts.map(post => post.homePage = true);
      res.render('homepage', { posts, loggedIn: req.session.loggedIn, });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/post/:id', async (req, res) => {
  await getPostById(req.params.id)
    .then(dbPostData => {
      post = dbPostData.get({ plain: true });
      res.render('single-post', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json( {message: 'This post does not exist' });
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


module.exports = router;