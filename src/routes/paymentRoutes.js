const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { pay } = require("../controllers/paymentController");

console.log("AUTH:", auth);
console.log("PAY:", pay);
router.post("/pay", auth, pay);

module.exports = router;
