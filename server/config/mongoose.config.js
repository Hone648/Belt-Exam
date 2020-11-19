const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pet_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res=>console.log("You're all up in my database, Dawg!"))
    .catch(err=>console.log("You are NOT inside my database", err))