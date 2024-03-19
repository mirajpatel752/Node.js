const express = require("express");
const Student = require("../module/students");
const router = new express.Router();

router.post("/students", async (req, res) => {
    try {
      const User = new Student(req.body);
      const createUser = await User.save();
      res.status(201).send(createUser);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.status(200).send(studentsData);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentsData = await Student.findById({ _id });
      if (!studentsData) {
        res.status(404).send();
      } else {
        res.status(200).send(studentsData);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.patch("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const update = req.body;
      const updatedStudentData = await Student.findByIdAndUpdate(_id, update, {
        new: true,
      });
      if (!updatedStudentData) {
        return res.status(404).send({ error: "Student not found" });
      }
      res.status(200).send(updatedStudentData);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  router.put("/students/:id", async (req, res) => {
      try {
        const _id = req.params.id;
        const update = req.body;
        const updatedStudentData = await Student.findByIdAndUpdate(_id, update, {
          new: true,
        });
        if (!updatedStudentData) {
          return res.status(404).send({ error: "Student not found" });
        }
        res.status(200).send(updatedStudentData);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  
  router.delete("/students/:id", async (req, res) => {
    try {
      const deteteStudent = await Student.findByIdAndDelete(req.params.id);
      if(!req.params.id){
          res.status(401).send()
      }else{
          res.send(deteteStudent);
      }
      
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
