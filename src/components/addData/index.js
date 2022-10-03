import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import Modal from "modals/ErrorModal";
import { SaveData } from "utils/storage/DataStorage";
import menuImage from "assets/images/tesodev.jpg";
import arrowImage from "assets/svg/leftarrow.svg";
import {
  nameSurnameControl,
  countryControl,
  cityControl,
  emailControl,
} from "utils/InputControls";

const AddData = () => {
  const [emailStyleControl, setEmailStyleControl] = useState(null);

  const [nameSurname, setNameSurname] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [email, setEmail] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const [nameSurname1, setNameSurname1] = useState(null);
  const [country1, setCountry1] = useState(null);
  const [city1, setCity1] = useState(null);
  const [email1, setEmail1] = useState(null);

  let navigate = useNavigate();

  let emailStyle = document.getElementById("email_id");
  let countryStyle = document.getElementById("country_id");
  let cityStyle = document.getElementById("city_id");
  let nameStyle = document.getElementById("name_id");

  const handleChangeNameSurname = (e) => {
    setNameSurname(nameSurnameControl(e.target.value));
    setNameSurname1(e.target.value);

    nameSurnameControl(e.target.value)
      ? setEmailStyleControl("#686868")
      : setEmailStyleControl("rgba(255, 0, 0, 0.7)");

    nameStyle.style.color = `${emailStyleControl}`;
  };
  const handleChangeCountry = (e) => {
    setCountry(countryControl(e.target.value));
    setCountry1(e.target.value);

    countryControl(e.target.value)
      ? setEmailStyleControl("#686868")
      : setEmailStyleControl("rgba(255, 0, 0, 0.7)");

    countryStyle.style.color = `${emailStyleControl}`;
  };
  const handleChangeCity = (e) => {
    setCity(cityControl(e.target.value));
    setCity1(e.target.value);

    cityControl(e.target.value)
      ? setEmailStyleControl("#686868")
      : setEmailStyleControl("rgba(255, 0, 0, 0.7)");

    cityStyle.style.color = `${emailStyleControl}`;
  };
  const handleChangeEmail = (e) => {
    setEmail1(e.target.value);
    setEmail(emailControl(e.target.value));

    emailControl(e.target.value)
      ? setEmailStyleControl("#686868")
      : setEmailStyleControl("rgba(255, 0, 0, 0.7)");

    emailStyle.style.color = `${emailStyleControl}`;
  };

  const addBtn = () => {
    let modal_root = document.getElementById("error-modal-root");
    let mixdata = { nameSurname1, country1, city1, email1 };
    // let errorList = [nameSurname, country, city, email];
    // let deneme = email1;

    nameSurname && country && city && email
      ? SaveData(mixdata)
      : setErrorMessage(email);

    modal_root.style.visibility = "visible";
  };

  const goToMainPage = () => {
    navigate(`/`);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.navigation}>
        <img className={style.menu_icon} src={menuImage} />
        <div onClick={goToMainPage} className={style.link_wrapper}>
          <img className={style.arrow_icon} src={arrowImage} />
          <p className={style.link}>Return to List Page</p>
        </div>
      </div>

      <div className={style.inputs_container}>
        <div className={style.input_item}>
          <p id="name_id">Name Surname</p>
          <input
            className={style.input_class}
            type="text"
            placeholder="Enter name and surname"
            onChange={handleChangeNameSurname}
          />
        </div>

        <div className={style.input_item}>
          <p id="country_id">Country</p>
          <input
            className={style.input_class}
            type="text"
            placeholder="Enter a country"
            onChange={handleChangeCountry}
          />
        </div>

        <div className={style.input_item}>
          <p id="city_id">City</p>
          <input
            className={style.input_class}
            type="text"
            placeholder="Enter a city"
            onChange={handleChangeCity}
          />
        </div>

        <div className={style.input_item}>
          <p id="email_id">Email</p>
          <input
            className={style.input_class_farklı}
            type="text"
            placeholder="Enter a e-mail (abc@xyz.com)"
            onChange={handleChangeEmail}
          />
        </div>
        <div className={style.add_btn} onClick={addBtn}>
          <p>Add</p>
        </div>
      </div>
      {/* <Modal data={errorMessage} /> */}
      <Modal
        // data={errorMessage}
        php1={nameSurname}
        php2={country}
        php3={city}
        php4={email}
      />
    </div>
  );
};

export default AddData;
