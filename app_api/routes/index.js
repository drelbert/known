//Router file 
const express = require('express');
const router = express.Router();
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
    .post(ctrlProjects.projectsCreate);

//Dealing with specific projects
router  
    .route('/projects/:projectid')
    .get(ctrlProjects.projectsReadOne)
    .put(ctrlProjects.projectsUpdateOne)
    .delete(ctrlProjects.projectsDeleteOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;


