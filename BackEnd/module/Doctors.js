const mongoose = require("mongoose");

const schema = mongoose.Schema;

const doctorSchema = new schema({
  name: {
    type: "String",
  },
  Specilty: {
    type: "String",
  },
  age: {
    type: "Number",
  },
  telephone: {
    type: "Number",
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
