const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config();
const cors = require("cors");
const v1PhoneRoutes = require("./v1/routes/phoneRoutes");
const PORT = process.env.PORT || 3030;
const imagesPath = "/public/assets/images";

const app = express();

app.use(express.static(__dirname + imagesPath));
app.use(
  cors({
    credentials: false,
    origin: [process.env.PUBLIC_DOMAIN],
  })
);

app.use(bodyParser.json());

app.use("/api/v1/phones", v1PhoneRoutes);

app.listen(PORT, () => console.log(`PhonesAPI is listening on port ${PORT}`));

module.exports = { PORT };
