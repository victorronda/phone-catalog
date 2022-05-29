const express = require("express");
const v1PhoneRoutes = require("./v1/routes/phoneRoutes");

const app = express();

app.use("/api/v1/phones", v1PhoneRoutes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`PhonesAPI is listening on port ${PORT}`));
