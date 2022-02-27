const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

const withAuth = require('../utils/auth');
const { getUserPosts, getPostById } = require('../utils/dbCalls');

router.get('/', withAuth, async (req, res) => {
  if (req.session.user_id){
    let dbPostData = await getUserPosts(req.session.user_id);
    if (dbPostData) {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    }
  }
});

// edit single post
router.get('/edit/:id', withAuth, async(req, res) => {
  await getPostById(req.params.id)
    .then(dbPostData => {
      if (dbPostData) {
        let post = dbPostData.get({ plain: true });
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else res.status(404).end();
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;