const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Name must be at least three characters in length"],
    },
    type: {
        type: String,
        minlength: [3, "Pet type must be at least three characters in length"],
        required: [true, "Pet Type is required"]
    }, 
    description: {
        type: String,
        minlength: [3, "Description must be at least three characters in length"],
        required: [true, "Description is required"]
    },
    skills: {
        skill1: {
            type: String,
            default: ""
        },
        skill2: {
            type: String,
            default: ""
        },
        skill3: {
            type: String,
            default: ""
        } 
    }
}, { timestamps: true })

module.exports.Pet = mongoose.model("Pet", PetSchema);