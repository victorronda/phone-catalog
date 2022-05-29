const DB = require("./db.json");

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
