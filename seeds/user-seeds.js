const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// empty array to push users to
const users = [];

// array of dummy names
let names = ['abe', 'bill', 'corey', 'dave', 'eliot', 'francis', 'gertie', 'heidi', 'inez', 'jessie'];

// loop to push those names and a password
for (let i = 0; i < 10; i++) {
  let username = names[i];
  users.push({ username, password: 'password' });
};

// function to bulk create the users in db
const seedUsers = () => User.bulkCreate(users, {individualHooks: true });

module.exports = seedUsers;