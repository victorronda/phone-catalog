import { createContext, useState, useEffect } from "react";
import { getAllPhones } from "../api/phones-service";

const PhoneContext = createContext();

export const PhoneContextProvider = (props) => {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
      try {
        const allPhones = await getAllPhones();
        setPhones(allPhones);
        setIsLoading(false)
      } catch (error) {
        setHasError(true);
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <PhoneContext.Provider value={{ phones, hasError, isLoading }}>
      {props.children}
    </PhoneContext.Provider>
  );
};

export default PhoneContext;
