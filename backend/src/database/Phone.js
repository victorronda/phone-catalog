const DB = require("./db.json");
const { saveToDatabase } = require("../utils/utils-database");

const getAllPhones = () => {
  try {
    const phones = DB.phones;
    return phones;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOnePhoneById = (phoneId) => {
  try {
    const phone = DB.phones.find((phone) => phone.id === +phoneId);
    if (!phone) {
      throw {
        status: 400,
        message: `Can't find the phone with the id '${phoneId}'`,
      };
    }
    return phone;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewPhone = (newPhone) => {
  try {
    const isAlreadyAdded =
      DB.phone.findIndex((phone) => phone.name === newPhone.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Phone with the name '${newPhone.name}' already exists`,
      };
    }

    DB.phones.push(newPhone);
    saveToDatabase(newPhone);
    return newPhone;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOnePhone = (phoneId) => {
  try {
    const indexForDeletion = DB.phones.findIndex(
      (phone) => phone.id === phoneId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find the phone with the id '${phoneId}'`,
      };
    }
    DB.phones.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllPhones,
  getOnePhoneById,
  createNewPhone,
  deleteOnePhone,
};
