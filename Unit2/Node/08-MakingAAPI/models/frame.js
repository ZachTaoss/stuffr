const { NotImplemented } = require("http-errors");
const mongoose = require("mongoose");
const frameSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [75, "name cant be longer than 75 characters"],
    require: [true, "please provide a name"],
  },
  ability1: {
    type: String,
    default: "Undefined",
    description: {
      type: String,
      required: [true, "Please Provide a description"],
    },
    damage: {
      type: Number,
      default: 0,
    },
    range: {
      type: Number,
      default: 1,
    },
    duration: {
      type: Number,
      default: 1,
    },
    cost: {
      type: Number,
      default: 50,
    },
  },
  ability2: {
    type: String,
    default: "Undefined",
    description: {
      type: String,
      required: [true, "Please Provide a description"],
    },
    damage: {
      type: Number,
      default: 0,
    },
    range: {
      type: Number,
      default: 1,
    },
    duration: {
      type: Number,
      default: 1,
    },
    cost: {
      type: Number,
      default: 50,
    },
  },
  ability3: {
    type: String,
    default: "Undefined",
    description: {
      type: String,
      required: [true, "Please Provide a description"],
    },
    damage: {
      type: Number,
      default: 0,
    },
    range: {
      type: Number,
      default: 1,
    },
    duration: {
      type: Number,
      default: 1,
    },
    cost: {
      type: Number,
      default: 50,
    },
  },
  ability4: {
    type: String,
    default: "Undefined",
    description: {
      type: String,
      required: [true, "Please Provide a description"],
    },
    damage: {
      type: Number,
      default: 0,
    },
    range: {
      type: Number,
      default: 1,
    },
    duration: {
      type: Number,
      default: 1,
    },
    cost: {
      type: Number,
      default: 50,
    },
  },
});

module.exports = frameSchema;
