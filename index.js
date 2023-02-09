const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = 8000;

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

const CalculateRoute = require("./routes/CalculateRoute");

app.use(CalculateRoute);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
