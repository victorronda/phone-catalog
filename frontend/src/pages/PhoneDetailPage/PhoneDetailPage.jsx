import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { getOnePhoneById } from "../../api/phones-service";
import Description from "../../components/Description/Description";
import PhoneImage from "../../components/PhoneImage/PhoneImage";
import SpecsPhone from "../../components/Specs/SpecsPhone/SpecsPhone";
import "./PhoneDetailPage.css";

const override = css`
  display: block;
  margin: 35vh auto;
  border-color: red;
`;

const PhoneDetailPage = () => {
  const [phone, setPhone] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [, setHasError] = useState(false);
  const { phoneId } = useParams();
  const { name, description, imageFileName } = phone;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const phone = await getOnePhoneById(phoneId);
        setPhone(phone);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        throw error;
      }
    };

    fetchData();
  }, [phoneId]);

  return (
    <>
      {isLoading && !imageFileName ? (
        <ClipLoader loading={isLoading} size={150} css={override} />
      ) : (
        <div className="phone-detail-container">
          <div className="phone-detail-img-col">
            <PhoneImage name={name} imageFileName={imageFileName} />
          </div>
          <div className="phone-detail-info-col">
            <div>
              <SpecsPhone specs={phone} />
            </div>
            <hr />
            <div>
              <Description description={description} />
            </div>
            <Link to="/">
              <button className="btn">Go back</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneDetailPage;
