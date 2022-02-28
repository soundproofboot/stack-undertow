const { Comment } = require('../models');

function randomUser() {
  return Math.floor(Math.random() * 10 + 1);
};

function randomPost() {
  return Math.floor(Math.random() * 20 +1);
};

const sample = {
  comment_text:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt necessitatibus repellendus, exercitationem eum quis atque!',
};

const comments = [];

for (let i = 0; i < 30; i++) {
  let {...comment} = sample;
  comment.user_id = randomUser();
  comment.post_id = randomPost();
  comments.push(comment);
};

// console.log(comments);
const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;