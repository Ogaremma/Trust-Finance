const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/payments", require("./src/routes/paymentRoutes"));

app.get("/", (req, res) => {
    res.send("TrustFinance Backend is running!");
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`TrustFinance running on port ${process.env.PORT || 3000}`);
});
