import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const LinkNavigate = () => {
  let navigate = useNavigate();

  let linkButton = () => {
    navigate("/savedata");
  };

  return (
    <div onClick={linkButton} className={style.wrapper}>
      <p>Add New Record</p>
    </div>
  );
};

export default LinkNavigate;
