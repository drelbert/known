//Router file 
const express = require('express');
const router = express.Router();
//Here, req the related controller files 
const ctrlProjects = require('../controllers/projects');
//This is where the path to the people controller will go

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

//People routes
//To be added later  

module.exports = router;


