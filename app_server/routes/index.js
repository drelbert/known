const express = require('express');
const router = express.Router();
//Here we require the controllers/main.js file
const ctrlMain = require('../controllers/main');

/* GET home page. */
//Here the controller function is referenced by this parameter.
router.get('/',ctrlMain.index);

module.exports = router;
