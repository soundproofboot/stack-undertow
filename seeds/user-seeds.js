const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const users = [];

let names = ['abe', 'bill', 'corey', 'dave', 'eliot', 'francis', 'gertie', 'heidi', 'inez', 'jessie'];

for (let i = 0; i < 10; i++) {
  let username = names[i];
  users.push({ username, password: 'password' });
};

// console.log(users);

const seedUsers = () => User.bulkCreate(users, {individualHooks: true });

module.exports = seedUsers;