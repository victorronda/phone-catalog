import React, { useContext } from "react";
import PhoneContext from "../../context/phones-context";

const PhoneCatalogPage = () => {
  const { phones, isLoading } = useContext(PhoneContext);
  return (
    <div>
      <h1>PhoneCatalogPage</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        phones.map((phone) => <div>{phone.name}</div>)
      )}
    </div>
  );
};

export default PhoneCatalogPage;
