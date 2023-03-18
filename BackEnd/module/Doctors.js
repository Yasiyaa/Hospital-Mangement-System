const mongoose = require("mongoose");

const schema = mongoose.schema;

const docterSchema = new schema({
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

const Doctor = mongoose.model("Doctor", docterSchema);

module.exports = Doctor;
