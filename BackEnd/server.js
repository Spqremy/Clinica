const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// const port = 8080;
app.listen(process.env.PORT | PORT, () => {
  console.log(`Example app listening at http://localhost:`);
  console.log(process.env.PORT);
});

const db = require("./db.js");
db.authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log("ErrorL:" + err));
require("./routes")(app);
