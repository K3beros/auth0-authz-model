const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, default: null, required: true },
  type: { type: String, required: true },
  owners_name: { type: String, default: null },
  email: { type: String, unique: true, required: true },
  password: {type: String, required: true},
  gender: { type: String,
    enum: ['Male', 'Female'],
    required: true
   },
  features: { type: String },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  token: { type: String}
});

module.exports = mongoose.model("Pet", petSchema);