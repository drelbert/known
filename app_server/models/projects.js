const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({ 
    title: {type: String, required: true},
    description: {type: String, required: true},
    lead: {type: String, required: true},
    teamMembers: {type: String, required: true},
    goal: {type: String, required: true},
    outcomes: {type: String, required: true} ,
    protoDue: {type: Date, required: true} , 
    bBuild: Date,
    cBuild: Date,
    firstSet: Date,
    completion: {type: Date, required: true},


});

mongoose.model('Project', projectSchema);