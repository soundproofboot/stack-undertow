# Stack Undertow
![MIT license badge](https://img.shields.io/badge/license-MIT-blue)

## Description

Stack Undertow is a demo full-stack CMS style blog. It's built with the MVC paradigm. Users can register an account, at which point their password is hashed before being saved in the database. They can then make and edit posts, which will be displayed on the homepage, and add comments on other posts when logged in.

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[License](#license)

[Questions](#questions)

## Installation
If you'd like to run this on your own machine, clone the starter code. Then add your mysql credentials to a .env file to sync sequelize. Start the server by running npm start.

## Usage
The Stack Undertow homepage lists arcticles by creation date. Users can browse these articles without an account, but must register to make posts of their own or comment on other users' posts. Users can register with a username and password. They are then taken to a dashboard, where they're shown a form to make a new post, and any posts they've made will be listed on their dashboard. They can edit or delete posts they've created. When a user goes to a single post they'll see any comments that have been left, and leave a comment of their own if they are logged in.

The application can be seen live on [Heroku](https://immense-dawn-78650.herokuapp.com/).

## Contributing

The following npm packages were used:

[bcrypt](https://www.npmjs.com/package/bcrypt) 
[dotenv](https://www.npmjs.com/package/dotenv)
[express](https://www.npmjs.com/package/express)
[express-session](https://www.npmjs.com/package/express-session)
[express-handlebars](https://www.npmjs.com/package/express-handlebars)
[sequelize](https://www.npmjs.com/package/sequelize)
[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
[mysql2](https://www.npmjs.com/package/mysql2)
[jest](https://www.npmjs.com/package/jest)

## License

### MIT License

Copyright 2022 Colin Bares

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Questions
You can check out my other projects on [GitHub](https://www.github.com/soundproofboot). Contact me at for any further questions.
