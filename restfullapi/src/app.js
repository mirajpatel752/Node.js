const express = require("express");
require("./db/conn");
const Student = require("./module/students");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// app.post("/students", (req, res) => {
//   const User = new Student(req.body);
//   User.save()
//     .then(() => {
//       res.status(201).send(User);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

app.post("/students", async (req, res) => {
  try {
    const User = new Student(req.body);
    const createUser = await User.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/students/:id", async (req, res) => {
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

app.patch("/students/:id", async (req, res) => {
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
app.put("/students/:id", async (req, res) => {
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

app.delete("/students/:id", async (req, res) => {
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

app.listen(port, () => {
  console.log("connection 👍");
});
