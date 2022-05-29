const Phone = require("../database/Phone");

const getAllPhones = () => {
  try {
    const allPhones = Phone.getAllPhones();
    return allPhones;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPhones,
};
