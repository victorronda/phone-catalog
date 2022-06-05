import axios from "axios";
import { CONNECTION_ERROR } from "../constants";

const phonesApiUri = `${process.env.REACT_APP_BACKEND_URI}/api/v1/phones`;

export const getAllPhones = async () => {
  try {
    const allPhones = await axios.get(phonesApiUri);
    return allPhones.data.data;
  } catch (error) {
    throw new Error(CONNECTION_ERROR);
  }
};

export const getOnePhoneById = async (phoneId) => {
  const phoneApiUri = `${phonesApiUri}/${phoneId}`
  try {
    const phone = await axios.get(phoneApiUri);
    return phone.data.data;
  } catch (error) {
    throw new Error(CONNECTION_ERROR);
  }
}
