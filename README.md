# LAB 06 & LAB 08

## Mongoose ORM & Express

### Author: Alex Spencer

### Links and Resources
* [lab 06 PR](https://github.com/alexspencer-401-advanced-javascript/lab-06/pull/1)
* [travis lab 06](https://github.com/alexspencer-401-advanced-javascript/lab-06/pull/1/checks?check_run_id=233373148)
* [lab 08 PR](https://github.com/alexspencer-401-advanced-javascript/lab-06/pull/2)
* [travis lab 08](https://travis-ci.com/alexspencer-401-advanced-javascript/lab-06/builds/129189189)
* [heroku](https://mongoose-lab-08.herokuapp.com/)

### Setup
#### `.env` requirements
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app

**Describe what npm scripts do**
* Scripts:
  - "lint": "eslint .",
  - "pretest": "npm run lint",
  - "jest": "jest",
  - "test": "npm run jest -- --coverage",
  - "test:watch": "npm run jest -- --watchAll",
  - "test:verbose": "npm run test -- --verbose",
  - "start": "node server.js",
  - "start:watch": "nodemon server.js"
  
#### Tests
All tests pass

#### Screenshots From Postman
- [app.get](./assets/app-get.png)
- [app.delete](./assets/app-delete.png)
- [app.get.by.id](./assets/app-get-by-id.png)
- [app.post](./assets/app-post.png)
- [app.put](./assets/app-put.png)
