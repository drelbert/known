//Projects Controller file 
//Get home page 

const homelist = function(req, res){
    res.render('index', { 
        title : 'Known' ,
        //Grouping into a pageHeader to make controller easier to update going forward. 
        pageHeader: {
            title: 'Known',
            strapline : 'Known delivers insight about your company\'s people and projects for informed decision making.'
        }
    });
};

//Get Project info page

const projectList = function(req, res,){
    res.render('project-list',  { 
        title : 'Project Details',
        pageHeader: {
            title: 'Known',
        },
        //Here is an array of the project object.
        projects: [{
            title : "Flo Fun Board",
            description : "Produce a floaty fun board for Flo.",
            lead : "Magnus Modeloson",
            teamMembers : "Gerrr, Nils, Sonya, and Lupe",
            goal : "Three size range, max 130 L, two channels, quad, Green ertified",
            outcomes : "200 boards sold in 2019, 150 tags/mentions, 100 ictures shared.",
            protoDue : "2018-11-01",
            bBuild : "2019-02-01",
            cBuild : "2019-04-01",
            firstSet : "2019-06-01"
        }, {
            title : "Norway Green Cert",
            description : "Go green and get certified by Norway's Green Initiative.",
            lead : "Lupe Trollstrom",
            teamMembers : "Sonya, Lauritz, Gerr",
            goal : "Within six months, obtain the Green Certification",
            outcomes : "Development and Production cycles using90% renewable materials.",
            protoDue : "2019-11-01"
        }]
    });
};

//Get Add project page

const addNew = function(req, res){
    res.render('add-project', {
        title : 'Add Project', 
        pageHeader: { title: 'Add Project' }
    });
};

module.exports = {
    homelist,
    projectList,
    addNew
};