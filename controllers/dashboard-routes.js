const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// need to set up auth
const { getUserPosts } = require('../utils/dbCalls');

router.get('/', async (req, res) => {
  if (req.session.user_id){
    let dbPostData = await getUserPosts(req.session.user_id);
    if (dbPostData) {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    }
  } else {
    res.render('pleaselogin');
  };
});

module.exports = router;