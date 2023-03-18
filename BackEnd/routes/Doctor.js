const router = require("express").Router();
const { response, request } = require("express");
const Doctor = require("../module/Doctors.js");

// insert new doctor to the system

router.route("/addNew").post(async (requst, response) => {
  // OLD method/////////

  // const name = req.body.name;
  // const specility = req.body.specility;
  // const age = req.body.age;
  // const telephone = req.body.telephone;

  // const newDoctor = new Doctor({
  //     name,
  //     specility,
  //     age,
  //     telephone
  // });

  // newDoctor.save().then(()=>{
  //     response.json("Doctor added !");
  // }).catch((err)=>{
  //     console.log(err);
  // });

  const { name, Specilty, age, telephone } = requst.body;

  const newDoctor = Doctor({
    name,
    Specilty,
    age,
    telephone,
  });

  const add = await newDoctor
    .save()
    .then(() => {
      console.log("Doctor added !");
      response.status(200).send({ status: "docter added !" });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send("server error");
    });
});


//get all the doctors
router.route("/").get(async(requset,response)=>{

  Doctor.find().then((doctors)=>{
    response.json(doctors);
  }).catch((err)=>{
    console.log(err);
    response.status(500).send({Status: "Error"});
  });
  
});

// update doctor details 
router.route("/update/:id").put(async(request,response)=>{

  let userId = request.params.id;

  const {name,Specilty,age,telephone} = request.body;

  const updateDoctor = {
    name,
    Specilty,
    age,
    telephone
  }

  const update = await Doctor.findByIdAndUpdate(userId,updateDoctor)
  .then(()=>{
    response.status(200)
  }).catch((err)=>{
    console.log(err);
    response.status(500).send({Status : "Error"});
  })


});

router.route("/delete/:id").delete(async(request,response)=>{

  let userId = request.params.id;

  await Doctor.findByIdAndDelete(userId).then(()=>{
    response.json("delete success");
  }).catch((err)=>{
    console.log(err);
    response.status(500).send("error");
  })

});



module.exports = router;
