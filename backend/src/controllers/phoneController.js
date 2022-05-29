const phoneService = require("../services/phoneService");

const getAllPhones = (req, res) => {
  try {
    const allPhones = phoneService.getAllPhones();
    res.send({ status: "OK", data: allPhones });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllPhones,
};
