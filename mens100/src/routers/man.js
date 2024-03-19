const express  = require("express")
const router = new express.Router();

const MenRanking = require("../module/mens")

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MenRanking(req.body);
    const createUser = await addingMensRecords.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const getMens = await MenRanking.find({});
    res.status(200).send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MenRanking.findById(_id, req.body);
    res.status(200).send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MenRanking.findByIdAnyUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(getMens);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MenRanking.findByIdAnyDelete({ _id });
    res.status(200).send(getMens);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router