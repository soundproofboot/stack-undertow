const { Comment } = require('../models');

// get a valid user id randomly
function randomUser() {
  return Math.floor(Math.random() * 10 + 1);
};

// get a random post id randomly
function randomPost() {
  return Math.floor(Math.random() * 20 +1);
};

// sample to copy
const sample = {
  comment_text:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt necessitatibus repellendus, exercitationem eum quis atque!',
};

// array to push comments to
const comments = [];

// loop to add sample comments with necessary values to array
for (let i = 0; i < 30; i++) {
  let {...comment} = sample;
  comment.user_id = randomUser();
  comment.post_id = randomPost();
  comments.push(comment);
};

// function to bulkCreate the comments in the array
const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;