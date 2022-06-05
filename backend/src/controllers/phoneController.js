const phoneService = require("../services/phoneService");
const { isValidPhoneForm } = require("../utils/utils-forms");

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

const getOnePhoneById = (req, res) => {
  const {
    params: { phoneId },
  } = req;
  if (!phoneId) {
    return;
  }
  try {
    const phone = phoneService.getOnePhoneById(phoneId);
    res.send({ status: "OK", data: phone });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewPhone = (req, res) => {
  const { body } = req;

  const validForm = isValidPhoneForm(body, res);
  if (!validForm) {
    return;
  }

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = body;

  const newPhone = {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  };
  try {
    const createdPhone = phoneService.createNewPhone(newPhone);
    res.send(201).send({ status: "OK", data: createdPhone });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOnePhone = (req, res) => {
  const {
    params: { phoneId },
  } = req;
  if (!phoneId) {
    return;
  }

  try {
    phoneService.deleteOnePhone(phoneId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllPhones,
  getOnePhoneById,
  createNewPhone,
  deleteOnePhone,
};
