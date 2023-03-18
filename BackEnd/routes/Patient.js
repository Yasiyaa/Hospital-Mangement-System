const router = require("express").Router();
const Patient = require("../module/Patients.js");


// insert new patient 

router.route("/addPatient").post(async(request,response)=>{

    const {name,sickness,age} = request.body;

    const newPatient = new Patient({
        name,
        sickness,
        age
    });

    const add = await newPatient.save()
    .then(()=>{
        console.log("Patient added !");
        response.status(200).send({status : "patient added"});
    }).catch((err)=>{
        console.log(err);
        response.status(500).send({status : "cannot added"});
    })
});

//get all patients
router.route("/").get(async(requset,response)=>{

    Patient.find().then((patient)=>{
      response.json(patient);
    }).catch((err)=>{
      console.log(err);
      response.status(500).send({Status: "Error"});
    });
    
  });
  
  // update patient details 
  router.route("/update/:id").put(async(request,response)=>{
  
    let userId = request.params.id;
  
    const {name,sickness,age} = request.body;
  
    const updatePatient = {
      name,
      sickness,
      age 
    }
  
    const update = await Patient.findByIdAndUpdate(userId,updatePatient)
    .then(()=>{
      response.status(200);
    }).catch((err)=>{
      console.log(err);
      response.status(500).send({Status : "Error"});
    })
  
});

  //delete patient
  router.route("/delete/:id").delete(async(request,response)=>{
  
    let userId = request.params.id;
  
    await Patient.findByIdAndDelete(userId).then(()=>{
      response.json("delete success");
    }).catch((err)=>{
      console.log(err);
      response.status(500).send("error");
    })
  
  });

module.exports = router;