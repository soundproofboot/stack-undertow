const { Post } = require('../models');

// function to get valid user id randomly
function randomId() {
  return Math.floor(Math.random() * 10 + 1);
};

// sample post to copy
const sample = {
  post_title:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet.',
  post_text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam quasi vel ipsa odio error labore corrupti nihil impedit assumenda tempore saepe magnam culpa, amet dolor? Officiis ratione, in excepturi, eligendi dolores ab delectus necessitatibus ex, voluptatem nesciunt quod soluta? Necessitatibus quaerat ipsa similique tempore harum. Deleniti, culpa dignissimos! Tempore enim, ullam ipsa illum, voluptatibus voluptatem eaque dicta voluptate impedit hic totam sequi, odit ut molestias et. Harum quae eos iusto quasi cupiditate perferendis. Iusto nobis nihil voluptatum error laboriosam.',
  };

// array to push dummy posts to
const posts = [];

// loop to add 20 dummy posts to array with necessary info
for (let i = 0; i < 20; i++) {
  let {...post} = sample;
  post.user_id = randomId();
  posts.push(post);
}

// function to bulkCreate posts
const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;