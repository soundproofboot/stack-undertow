const router = require('express').Router();
const { Post, User, Comment } = require('../models')
// const sequelize = require('../config/connection');
const { getAllPosts, getPostById } = require('../utils/dbCalls')

// get all posts to display on homepage, sort by most recent
router.get('/', async (req, res) => {
    await getAllPosts()
    .then(dbPostData => {
      // get plain data from posts returned from db
      const posts = dbPostData.map(post => post.get({ plain: true }));
      // add this property so body of post will NOT display on homepage
      posts.map(post => post.homePage = true);
      // render homepage view with posts and tell 'homepage'whether or not user is logged in
      res.render('homepage', { posts, loggedIn: req.session.loggedIn, });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// page for a single post
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

// login page
router.get('/login', (req, res) => {
  // if user is already logged in, redirect them back to homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// signup page
router.get('/signup', (req, res) => {
  // if user is already logged in, redirect to home
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
})


module.exports = router;