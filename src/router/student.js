const express = require("express");
const router = express.Router();
const studentModule = require("../modules/student");

router.get("/get", studentModule.fetchStudent);

router.post("/add", studentModule.newStudent);

router.put("/update/:studentId", studentModule.whomToAssign);

module.exports = router;