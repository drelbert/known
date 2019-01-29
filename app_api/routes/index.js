//Router file 
const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
//Here, req the related controller files 
const ctrlProjects = require('../controllers/projects');
const ctrlAuth = require('../controllers/authentication');

//Defining the routes

//Projects routes
//Dealing with all the projects
router
    //first define the route
    .route('/projects')
    //then chain on different HTTP methods such as get, post, put etc
    .get(ctrlProjects.projectsList)
    .post(auth, ctrlProjects.projectsCreate);

//Dealing with specific projects
router  
    .route('/projects/:projectid')
    .get(ctrlProjects.projectsReadOne)
    .put(auth, ctrlProjects.projectsUpdateOne)
    .delete(auth, ctrlProjects.projectsDeleteOne);

//Dealing with user reg and login. 
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;


