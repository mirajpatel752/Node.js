const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    minLength:3,
  },
  email:{
    type:String,
    required:true,
    unique:[true, "email id already present"],
    validate(value){
        if(!validator.isEmail(value)){
            throw new  Error ("Invalid Email") 
        }
    }
  },
  phone:{
    type:Number,
    min:10,
    required:true,
    unique:true,
  },
  address:{
    type:String,
    required:true
  }
});


const Students  = new mongoose.model("Student",studentsSchema)

module.exports = Students