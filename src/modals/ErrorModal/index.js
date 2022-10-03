import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import closeSvg from "assets/svg/close.svg";
import style from "./style.module.css";

const ErrorModal = ({ php1, php2, php3, php4 }) => {
  const [emailCheck, setEmailCheck] = useState(null);
  let modal_root = document.getElementById("error-modal-root");

  let titles;
  if (php4 == true) {
    titles = "email doğru girilmiştir.";
  } else if (php4 == false) {
    titles = "email hatalıdır girilmiştir.";
  } else {
    titles = "veri gelmedi --> null";
  }

  // if (data[3] === null) {
  //   console.log("email gelmedi");
  // } else if (data[3] === true) {
  //   console.log("adam email'i doğru girdi");
  // } else if (data[3] === false) {
  //   console.log("adam email'i doğru girdi");
  // }

  let closeBtn = () => {
    modal_root.style.visibility = "hidden";
  };
  useEffect(() => {
    modal_root.style.visibility = "hidden";
  }, []);

  return createPortal(
    <div id="close" className={style.modal}>
      <img onClick={closeBtn} className={style.close} src={closeSvg} />
      <p>you have a Error Message</p>
      <hr />
      {/* <p>name surname : {php1 ?? "sadf"}</p>
      <p>country : {php2}</p>
      <p>city : {php3}</p>
      <p> email : {php4}</p> */}
      <p>{titles}</p>
    </div>,
    document.getElementById("error-modal-root")
  );
};

export default ErrorModal;
