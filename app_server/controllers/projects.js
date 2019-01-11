//Setting the default config option to use the correct URL depending on the envio, adding NODE_ENV.
//Given that every API call needs fully qualified URL, must include the full address.
const request = require('request');
const apiOptions = {
    server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://intense-river-13488.herokuapp.com';
}
//Projects Controller file 
//Get home page 
//Practice point, separation of concerns.  Decouple the .render from app logic to practice where one fucntion just does one thing.
const homelist = function(req, res){
    //Mapping info to build the API request.
    const path = '/api/projects';
    //Var requestOtions value here and used below in the request module below.
    const requestOptions = {
        //Modfication made Jan 9, added backtics and {}.
        url : `{apiOptions.server + path}`,
        method : 'GET',
        json : {},
        qs : { }
    };  
    //Given the req and res data, here is the code that will pass the data right into the _renderHomepage function.
    //Using the request module, callback
    request(
        //This is the Java Script object defining the req.  
        requestOptions,
        //This is the function to run when the res is recieved.   
        //Could this callback be more robust to catch errors returned by API?
        function(err, response, body) {
            _renderHomepage(req, res, body);
        }
    );
};
//GET Add Project page
const addNew = function(req, res){
    _renderAddProject(req, res);
};
//This is the controller with the call to the above function
const projectsCreate = function(req, res){
    const path = `/api/projects`;
        //Creating a new object with the var names the API expects and use the req.body to get the values from the form.
    const postdata = {
        title: req.body.title,
        description: req.body.description,
        lead: req.body.lead,
        teamMembers: req.body.teamMembers,
        goal: req.body.goal,
        outcomes: req.body.outcomes,
        completion: req.body.completion
    };
    //Setting all requestOptions needed to call API
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'POST',
        json : postdata
    }; 
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect(`/`);
            } else {
                _showError(req, res, response.statusCode);
            }
        }
    );
};
//create an external function to hold the contents of the addNew controller
//Here the rendering is placed into a separate named function for the sepatation of concerns
//This is a named function
const _renderAddProject = function (req, res) {       
    res.render('add-project', {
        title: 'Add Project',
        pageHeader: { title: 'Add Project' } 
    });
};

// This function placed below the homelist function and now the page loads and renders data from db
const _renderHomepage = function(req, res, responseBody){
    //Updating the function in case the API doesn't return any projects.
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No projects have been added yet.";
        }
    }
    res.render('project-list', {
      title: 'Known',
      pageHeader: {
        title: 'Known',
        list: 'Current Projects'
      },
      sidebar : 'Known delivers insight about your company\'s people and projects for informed decision making.',
      projects: responseBody,
      message: message
    });
};


//Get Project info page

const projectDetails = function(req, res){
    const path = `/api/projects/${req.params.projectid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            let data = body;
            //Adding error catching code. 
            //This will allow for rneding only if there is something from the API to display. 
            if (response.statusCode === 200) {
                data.body = {
                    title : body
                };
            _renderDetailPage(req, res, data);
            } else {
            _showError(req, res, response.statusCode);
            }
        }
    );
};

const _renderDetailPage = function (req, res, projDetail) {
    res.render('project-details', { 
            title: projDetail.title,
            pageHeader: {
                title: projDetail.title        
            },
            body: {
                description: projDetail.description,
                lead: projDetail.lead,
                teamMembers: projDetail.teamMembers,
                goal: projDetail.goal,
                outcomes: projDetail.outcomes,
                completion: projDetail.completion
            },
            project: projDetail
        });
};

//Adding error-handling function to display error messages
//This function can be used from any controller where needed.
const _showError = function (req, res, status) {
    let title = '';
    let content = '';
    if (status === 404) {
        title = '404, Content not found';
        content = 'Looks like there is a problem, this content cannot be found.';
    } else {
        title = `${status}, something is wrong`;
        content = 'There is an error somewhere.';
    }
    res.status(status);
    res.render('generic-text', {
        title : title,
        content : content
    });
};

module.exports = {
    homelist,
    projectDetails,
    addNew,
    projectsCreate
};