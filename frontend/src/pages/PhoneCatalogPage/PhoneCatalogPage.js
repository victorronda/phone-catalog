import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import CardList from "../../components/UI/Card/CardList/CardList";
import PhoneContext from "../../context/phones-context";

const PhoneCatalogPage = () => {
  const { isLoading } = useContext(PhoneContext);
  return (
    <div>
      <h1>PhoneCatalogPage</h1>
      {isLoading ? (
        <div>
          <ClipLoader loading={isLoading} size={150} />
        </div>
      ) : (
        <CardList />
      )}
    </div>
  );
};

export default PhoneCatalogPage;
