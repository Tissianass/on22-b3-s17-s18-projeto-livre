const mongoose = require("mongoose")

const KidsSchema = new mongoose.Schema(

    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
            
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        birth: {
            type: String,
            required: true, 
        },
        school: {
            type: String,
            required: true,
        },
        responsible: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        

    }
    
)

const Model = mongoose.model("Kids", KidsSchema)

module.exports = Model

