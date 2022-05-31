import axios from "axios";

const phonesApiUri = `${process.env.REACT_APP_BACKEND_URI}/api/v1/phones`;

export const getAllPhones = async () => {
  try {
    const allPhones = await axios.get(phonesApiUri);
    return allPhones.data.data;
  } catch (error) {
    throw new Error("Something went wrong. Try again or wait a few minutes");
  }
};
