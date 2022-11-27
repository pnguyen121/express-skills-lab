
// require in the other info from elsewhere
const Skill = require('../models/skill')


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill

}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      time: req.time
    });
  }

      // function for a new skill and it has to above the show function
function newSkill(req, res){
  res.render('skills/new', {
    
  })

}

// function to add a new skill after submitting the form
function create(req, res){

  Skill.create(req.body) // grabs the function called create in the model
  // after hitting submit redirect to the listed skills page
  res.redirect('/skills')
}

// delete skill the req.params grabs the ID of the one you click, not sure where deleteOne comes from
// redirects to the skills page after
function deleteSkill(req, res){
  Skill.deleteOne(req.params.id);
  res.redirect('/skills')
}


//   show function
function show(req, res){
    res.render('skills/show',{
        skill: Skill.getOne(req.params.id)
    })
}