const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Must Provide a name"]
    },
    price:{
        type: Number,
        required:[true, `Must Provide a price`]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type: Number,
        default:4
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea',`liddy`,`caressa`,`marcos`],
            message:`EWWWWWWWWWW`
        }
    }
})

module.exports = mongoose.model("Product",productSchema)