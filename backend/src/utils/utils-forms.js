const { isValidNumber } = require("./utils-numbers");
const { isValidString } = require("./utils-strings");

const isValidPhoneForm = (inputs, res) => {
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
  } = inputs;

  if (
    !name ||
    !manufacturer ||
    !description ||
    !color ||
    !price ||
    !imageFileName ||
    !screen ||
    !processor ||
    !ram
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: `One of the following keys is missing or is empty in request body: 
          'name', 'manufacturer', 'description', 'color', 'price', 'imageFileName'', 'screen', 'processor', 'ram'`,
      },
    });
    return false;
  }

  const stringInputs = [
    name,
    manufacturer,
    description,
    color,
    imageFileName,
    screen,
    processor,
  ];
  const numberInputs = [price, ram];

  if (!stringInputs.every((input) => isValidString(input))) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: `One of the following keys is not a valid string: 
          'name', 'manufacturer', 'description', 'color', 'imageFileName'', 'screen', 'processor'`,
      },
    });
    return false;
  }

  if (!numberInputs.every((input) => isValidNumber(input))) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: `One of the following keys is not a valid number: 'price', 'ram'`,
      },
    });
    return false;
  }

  return true;
};

module.exports = {
  isValidPhoneForm,
};
