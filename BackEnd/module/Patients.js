const mongoose = require("mongoose");

const schema = mongoose.schema;

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

const Patient = mongoose.model("Patient", docterSchema);

module.exports = Patient;
