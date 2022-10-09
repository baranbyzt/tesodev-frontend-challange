import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getEdittedMockData } from "store/SearchSlice";
import style from "./style.module.css";
import LinkSection from "./ListSection";
import { useNavigate } from "react-router-dom";

const BasicListData = () => {
  const getEditedValue = useSelector(getEdittedMockData);
  const [useStateData, setUseStateData] = useState(null);
  let navigate = useNavigate();

  let linkButton = () => {
    navigate("/listdata");
  };

  useEffect(() => {
    setUseStateData(getEditedValue);
  }, [getEditedValue]);

  return (
    <div className={style.wrapper}>
      {useStateData !== null || undefined ? (
        useStateData
          .slice(0, 3)
          .map((value, index) => <LinkSection key={index} data={value} />)
      ) : (
        <p>ups..</p>
      )}
      <p onClick={linkButton} className={style.show_more}>
        Show More...
      </p>
    </div>
  );
};

export default BasicListData;
