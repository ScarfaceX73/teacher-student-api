const express = require("express");
const router = express.Router();
const teacherModule = require("../modules/teacher");

router.get("/get", teacherModule.roomInfo);

router.post("/add", teacherModule.newRoom);

router.put("/update/:teacherId", teacherModule.isWorking);

module.exports = router;