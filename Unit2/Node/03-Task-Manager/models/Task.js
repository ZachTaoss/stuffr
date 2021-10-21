const mongoose = require(`mongoose`)

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Must provided a name"],
        trim: true,
        maxlength: [20,`Name cannot be more than 20 chars long`]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task",TaskSchema)