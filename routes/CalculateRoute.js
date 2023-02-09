const express = require("express");
const router = new express();

const { calculateSum } = require("../controller/CalculateController");

router.post("/cal", calculateSum);

module.exports = router;
