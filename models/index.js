const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// post can have only one user
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// comments belong to one user and one post
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// user can have many posts
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// posts can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };