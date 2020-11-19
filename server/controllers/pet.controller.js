const { Pet } = require('../models/pet.model');

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(pet=>res.json(pet))
        .catch(err=>res.status(400).json(err))
}
module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pet=>res.json(pet))
        .catch(err=>res.json(err))
}
module.exports.getPet = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet=>res.json(pet))
        .catch(err=>res.json(err))
}
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(pet=>res.json(pet))
        .catch(err=>res.json(err))
}
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id:req.params.id})
        .then(deleteConf=>res.json(deleteConf))
        .catch(err=> res.json(err))
}
module.exports.getByName = (req, res) => {
    Pet.findOne({name:req.params.name})
        .then(pet=>res.json(pet))
        .catch(err=>res.json(err))
}