

//To include the model use Mongoose 
//This first line gives the controllers access to the db connection.
const mongoose = require('mongoose');
//This second line brings in the Project model to allow interaction with the Projects collection.
//Loc is the name 
const Loc = mongoose.model('Project');

//Need error handling for this controller 
const projectsList = function (req, res) { 
    Loc 
        .find(req.params.projects)
        .exec((err, projects) => {
            res
                .status(200)
                .json(projects);
        });
    };

//Creating new docs in MongoDB with  Mongoose
const projectsCreate = function (req, res) { 
    Loc.create({
       title: req.body.title,
       description: req.body.description,
       lead: req.body.lead,
       teamMembers: req.body.teamMembers,
       goal: req.body.goal,
       outcomes: req.body.outcomes,
       completion: req.body.completion
    }, (err, project) => {
        if (err) {
            res
                .status(400)
                .json(err);
        }  else  {
            res
                .status(201)
                .json(project);
        }
    });
};

const projectsReadOne = function (req, res) { 
    //Adding error trapping 
    if (req.params && req.params.projectid){
    Loc
        //The .findById method below accepts a single parameter, the ID to look for.
        .findById(req.params.projectid)
        //The exec method executes the query and passes a callback function that runs when operation is complete.  
        //There are two params err and the instance of the found doc
        .exec((err, project) => {
            if (!project) {
            res
                .status(404)
                .json({
                    "message" : "projectid not found"
                });
            return;
        }  else if  (err) {
            res 
                .status(404)
                .json(err);
            return;
            }
            res 
                .status(200)
                .json(project);
        });
    }   else  { 
        res 
        .status(404)
        .json({
            "message" : "No projectid in request"
        });
    } 
}; 

const projectsUpdateOne = function (req, res) { 
    if (!req.params.projectid) {
        res 
            .status(404)
            .json({
                "message" : "Not found, projectid is required"
            });
        return;
    }
    Loc 
        .findById(req.params.projectid)
        .select('-title -lead')
        .exec((err, project) => {
            if (!project) {
                res
                    .json(404)
                    .status({
                        "message" : "projectid not found"
                    });
                return;
            } else if (err) {
                res 
                    .status(400)
                    .json(err);
                return;
            }  
            project.title = req.body.title;
            project.description = req.body.description;
            project.lead = req.body.lead;
            project.team = req.body.team;
            project.outcomes = req.body.outcomes;
            project.completion = req.body.completion 
        },
        project.save((err, project) => {
            if (err) {
                res
                    .status(404)
                    .json(err);
            } else {
                res
                    .status(200)
                    .json(project);
            }  
        })
        )
    };

//This controller could be updated to add a step to first find the project before just deleting it
const projectsDeleteOne = function (req, res) {
    const projectid = req.params.projectid;
    if (projectid) {
        Loc 
            .findByIdAndRemove(projectid)
            .exec((err, project) => {
                if(err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res 
                    .status(204)
                    .json(null);
            }
        );
    }  else {
        res
            .status(404)
            .json({
                "message": "No projectid"
            });
}};

module.exports = {
   projectsList,
   projectsCreate,
   projectsReadOne,
   projectsUpdateOne,
   projectsDeleteOne
};