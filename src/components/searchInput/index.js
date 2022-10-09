import { useState, useEffect } from "react";
import style from "./style.module.css";
import searchImage from "assets/svg/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setEditedMockData } from "store/SearchSlice";
import { getSearchTermValue, getMockDataValue } from "store/SearchSlice";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [inputSearchTerms, setInputSearchTerm] = useState(null);
  const getSearchTerm = useSelector(getSearchTermValue);
  const getMockData = useSelector(getMockDataValue);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleChangeInput = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  let searchOnclick = () => {
    navigate("/listdata");
  };

  useEffect(() => {
    const searchFilter = getMockData.data.filter(
      (value) =>
        value[0].toLowerCase().includes(getSearchTerm) ||
        value[1].toLowerCase().includes(getSearchTerm) ||
        value[2].toLowerCase().includes(getSearchTerm) ||
        value[3].toLowerCase().includes(getSearchTerm) ||
        value[4].toLowerCase().includes(getSearchTerm) ||
        value[5].toLowerCase().includes(getSearchTerm)
    );
    dispatch(setEditedMockData(searchFilter));
  }, [getSearchTerm]);

  return (
    <div className={style.input_wrapper}>
      <div className={style.img_wrapper}>
        <img src={searchImage} />
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChangeInput}
          className={style.input}
        />
      </div>

      <div onClick={searchOnclick} className={style.search_btn}>
        <p>Search</p>
      </div>
    </div>
  );
};

export default SearchInput;
