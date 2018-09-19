//This file has the controller code

//First create and export a method called about which will house the res.render code
//Get About page
const about = function(req, res) {
    res.render('about', { 
        title: 'About',
        pageHeader: {
            title: 'About Known',
            details: 'Find the right match for your next project.'
        }
    });
};
//Here the about function is exported to the routes/index.js file
module.exports = {
    about
};