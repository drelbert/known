//This file has the controller code

//First create and export a method called index which will house the res.render code
//Get home page
const index = function(req, res) {
    res.render('index', { title: 'Known'});
};
//Here the index function is exposed for the routes/index.js file
module.exports = {
    index
};