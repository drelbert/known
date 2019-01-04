//Schema to model details 
//Object is Project

//Adding the project object to mongodb
//Note, the default collection name is a lowercase pluralized version of the model name
//Loading Flo Fun Board and Norway Green Cert documents to projects collection

db.projects.save({
    title : "Flo Fun Board",
    description : "Produce a floaty fun board for Flo.",
    lead : "Magnus Modeloson",
    teamMembers : "Gerrr, Nils, Sonya, and Lupe",
    goal : "Three size range, max 130 L, two channels, quad, Green ertified",
    outcomes : "200 boards sold in 2019, 150 tags/mentions, 100 pictures shared.",
    protoDue : "2018-11-01",
    bBuild : "2019-02-01",
    cBuild : "2019-04-01",
    firstSet : "2019-06-01",
    completion : "2019-10-10"
})

db.projects.save({
    title : "Norway Green Cert",
    description : "Go green and get certified by Norway's Green Initiative.",
    lead : "Lupe Trollstrom",
    teamMembers : "Sonya, Lauritz, Gerr",
    goal : "Within six months, obtain the Green Certification",
    outcomes : "Development and Production cycles using 90% renewable materials.",
    protoDue : "2019-11-01",
    completion: "2019-12-31"
})


/*
//hold, object data from controller replaced with data from db.
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

    */