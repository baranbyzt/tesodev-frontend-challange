import location from "assets/svg/location.svg";
import style from "./style.module.css";

const ListSection = ({ data }) => {
  return (
    <>
      <div className={style.link_item}>
        <img src={location} />
        <div>
          <p>{data[0]}</p>
          <div className={style.location}>
            <p>{data[4]},</p>
            <p>{data[5]}</p>
          </div>
        </div>
      </div>
      <hr className={style.border} />
    </>
  );
};

export default ListSection;
