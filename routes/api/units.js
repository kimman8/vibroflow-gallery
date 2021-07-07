const express = require("express");
const uuid = require("uuid");

const units = require("../../Units");

const router = express.Router();
const idFilter = (req) => (unit) => unit.id === parseInt(req.params.id);
//get all units
router.get("/", (req, res) => res.json(units));
//get single unit
router.get("/:id", (req, res) => {
  const found = units.some(idFilter(req));
  if (found) {
    res.json(units.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No unit of the id ${req.params.id}` });
  }
});

//create unit
router.post("/", (req, res) => {
  const newUnit = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newUnit.name || !newUnit.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }
  units.push(newUnit);
  // res.json(units);
  res.redirect("/");
});

//update unit
router.get("/:id", (req, res) => {
  const found = units.some(idFilter(req));
  if (found) {
    const updUnit = req.body;
    units.forEach((unit) => {
      if (unit.id === parseInt(req.params.id)) {
        unit.name = updUnit.name ? updUnit.name : unit.name;
        unit.email = updUnit.email ? updUnit.email : unit.email;
        res.json({ msg: "Unit updated", unit });
      }
    });
  } else {
    res.status(400).json({ msg: `No unit of the id ${req.params.id}` });
  }
});

//delete  single unit
router.delete("/:id", (req, res) => {
  const found = units.some(idFilter(req));
  if (found) {
    res.json({
      msg: "unit deleted",
      units: units.filter((unit) => unit.id !== parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({ msg: `No unit of the id ${req.params.id}` });
  }
});

module.exports = router;
