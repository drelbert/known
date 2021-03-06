const express = require('express');
const router = express.Router();

//Here we require the controllers/projects and about files
const ctrlProjects = require('../controllers/projects');
const ctrlAbout= require('../controllers/others');

/* Projects pages */
//Here the controller function is referenced by this parameter.
//Eg homeList refs controller homeList in controllers folder
//These are the routes for each screen
//These routes serve as a mapping service taking the URL of incoming req and mapping it to app functionality
router.get('/', ctrlProjects.homelist);
router.get('/project/:projectid', ctrlProjects.projectDetails);
//Adding a ...
router
   .route('/projects/add/new')
   .get(ctrlProjects.addNew)
   .post(ctrlProjects.projectsCreate); 



/* Other pages */
router.get('/about', ctrlAbout.about);


module.exports = router;