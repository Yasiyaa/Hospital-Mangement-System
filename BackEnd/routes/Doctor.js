const router = require("express").Router();
const Doctor = require("../module/Doctors.js");



// insert new doctor to the system

router.route("/addNew").post(async(requst,response)=>{


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


    const {name,Specilty,age,telephone} = requst.body;

    const newDoctor = Doctor({
        name,
        Specilty,
        age,
        telephone
    })

    const add = await newDoctor .save().then(()=>{
        console.log("Doctor added !");
        response.status(200).send({status :"docter added !"});
    })
    .catch((err)=>{
        console.log(err);
        response.status(500).send("server error");
    });
});
