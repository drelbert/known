const mongoose = require('mongoose');

//Everything is derived from a schema so here is a reference to the schema and the definition of the project 
//Each schema maps to a MongoDb collection and def the doc shape
const projectSchema = new mongoose.Schema({ 
    //Here are the keys which define a property
    //So property title is cast to the string schema type
    title: {type: String, required: true},
    description: {type: String, required: true},
    lead: {type: String, required: true},
    teamMembers: {type: String, required: true},
    goal: {type: String, required: true},
    outcomes: {type: String, required: true} ,
    protoDue: {type: Date},
    completion: {
       type: Date, 
        required: true
    },
});
//Here the schema is compiled into a model
mongoose.model('Project', projectSchema);