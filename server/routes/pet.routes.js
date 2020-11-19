const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.post('/api/pet/new', PetController.createPet)
    app.get('/api/pet', PetController.getAllPets)
    app.get('/api/pet/:id', PetController.getPet)
    app.put('/api/pet/:id', PetController.updatePet)
    app.delete('/api/pet/:id', PetController.deletePet)
    app.get('/api/pet/:name', PetController.getByName)
}