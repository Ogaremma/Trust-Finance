const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { pay } = require("../controllers/paymentController");

router.post("/pay", auth, pay);

module.exports = router;
