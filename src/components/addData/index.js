import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import style from "./style.module.css";
import menuImage from "assets/images/tesodev.jpg";
import arrowImage from "assets/svg/leftarrow.svg";
import {
  nameSurnameControl,
  countryControl,
  cityControl,
  emailConrtol,
} from "utils/InputControls";

const AddData = () => {
  const [nameSurname, getNameSurname] = useState(null);
  const [country, getCountry] = useState(null);
  const [city, getCity] = useState(null);
  const [email, getEmail] = useState(null);

  const handleChangeNameSurname = (e) => {
    console.log(e.target.value);
    // nameSurnameControl();
  };
  const handleChangeCountry = (e) => {
    console.log(e.target.value);
  };
  const handleChangeCity = (e) => {
    console.log(e.target.value);
  };
  const handleChangeEmail = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.navigation}>
        <img className={style.menu_icon} src={menuImage} />
        <div className={style.link_wrapper}>
          <img className={style.arrow_icon} src={arrowImage} />
          <p className={style.link}>Return to List Page</p>
        </div>
      </div>

      <div>
        <div className={style.input_item}>
          <p>Name Surname</p>
          <input
            type="text"
            placeholder="Enter name and surname"
            onChange={handleChangeNameSurname}
          />
        </div>

        <div className={style.input_item}>
          <p>Country</p>
          <input
            className={style.yarra}
            type="text"
            placeholder="Enter a country"
            onChange={handleChangeCountry}
          />
        </div>

        <div className={style.input_item}>
          <p>City</p>
          <input
            type="text"
            placeholder="Enter a city"
            onChange={handleChangeCity}
          />
        </div>

        <div className={style.input_item}>
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter a e-mail (abc@xyz.com)"
            onChange={handleChangeEmail}
          />
        </div>
      </div>
    </div>
  );
};

export default AddData;
