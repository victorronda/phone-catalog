import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import CardList from "../../components/UI/Card/CardList/CardList";
import PhoneContext from "../../context/phones-context";
import "./PhoneCatalogPage.css";

const override = css`
  display: block;
  margin: 35vh auto;
  border-color: red;
`;

const PhoneCatalogPage = () => {
  const { isLoading } = useContext(PhoneContext);
  return (
    <div className="phone-catalog-container">
      <h1 className="phone-catalog-title">Phone Catalog</h1>
      {isLoading ? (
        <div>
          <ClipLoader loading={isLoading} size={150} css={override} />
        </div>
      ) : (
        <CardList />
      )}
    </div>
  );
};

export default PhoneCatalogPage;
