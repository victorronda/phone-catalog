const DB = require("./db.json");
const { PORT } = require('../index')

const getAllPhones = () => {
  try {
    const phones = DB.phones;
    return phones;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  getAllPhones,
};
