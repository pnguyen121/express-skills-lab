// ===================================================
// ALERT THIS IS NOT A DATABASE/ "REAL MODEL"

// This is for simplicity purposes right now, 
// we just want to think this is our data, 
// and Our Model is an object of functions to perform
// CRUD operations on the data (Create, Read, Update, Destroy)
// ===================================================



const skills = [
    {id: 125222, name:'Phil',skill: 'HTML', experience: 'Pro'},
    {id: 227903, name:'Phil',skill: 'CSS', experience: 'Knowledgable'},
    {id: 339604, name:'Phil',skill: 'JavaScript', experience: 'Amatuer'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1)
  }


  function editOne(id){
    Skill.findByIdAndUpdate(req.params.id, req.body)
  }
