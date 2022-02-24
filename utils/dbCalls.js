const { User, Post, Comment } = require('../models');

async function getAllPosts() {
  let postData = await Post.findAll({
    order: [['created_at', 'DESC']],
    attributes: ['id', 'post_title', 'post_text', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });
  return postData;
};

async function getPostById(postId) {
  let postData = await Post.findOne({
    where: {
      id: postId,
    },
    attributes: ['id', 'post_title', 'post_text', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });
  return postData;
}

module.exports = { getAllPosts, getPostById };