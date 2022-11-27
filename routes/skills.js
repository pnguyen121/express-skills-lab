var express = require('express');
var router = express.Router();

// require from controller skills.js
const skillsController = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);

// Add in a new skill route for the add skill page. it would be like /skills/new has to be above the show route
router.get('/new', skillsController.new)


// add in show route for specific IDD
router.get('/:id', skillsController.show)

// Actually add in the new skill by using the form/submit button
router.post('/', skillsController.create)


// Add in the delete route delete by a specific iD
router.delete('/:id', skillsController.delete)


module.exports = router;
