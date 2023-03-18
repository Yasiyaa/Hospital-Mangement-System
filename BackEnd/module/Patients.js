const mongoose = require("mongoose");

const schema = mongoose.Schema;

const PatientSchema = new schema({
  name: {
    type: "String",
  },
  sickness: {
    type: "String",
  },
  age: {
    type: "Number",
  }
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
