const { v4: uuid } = require("uuid");
const Phone = require("../database/Phone");

const getAllPhones = () => {
  try {
    const allPhones = Phone.getAllPhones();
    return allPhones;
  } catch (error) {
    throw error;
  }
};

const getOnePhoneById = (phoneId) => {
  try {
    const phone = Phone.getOnePhoneById(phoneId);
    return phone;
  } catch (error) {
    throw error;
  }
};

const createNewPhone = (newPhone) => {
  const phoneToInsert = {
    ...newPhone,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdPhone = Phone.createNewPhone(phoneToInsert);
    return createdPhone;
  } catch (error) {
    throw error;
  }
};

const deleteOnePhone = (phoneId) => {
  try {
    Phone.deleteOnePhone(phoneId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPhones,
  getOnePhoneById,
  createNewPhone,
  deleteOnePhone,
};
