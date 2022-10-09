import style from "./style.module.css";
import tesodevImage from "assets/images/tesodev.jpg";
import { useSelector } from "react-redux";
import { getEdittedMockData } from "store/SearchSlice";
// components
import Footer from "components/footer";
import SckrollNews from "components/scrollNews";
import SearchInput from "components/searchInput";
import BasicListData from "components/basicListData";
import LinkNavigate from "components/linkNavigate";

const MainPage = () => {
  const getEditedValue = useSelector(getEdittedMockData);
  return (
    <>
      <LinkNavigate />
      <div className={style.wrapper}>
        <div className={style.input_section}>
          <img className={style.main_icon} src={tesodevImage} />
          <SearchInput />
          {getEditedValue[0] !== undefined ? <BasicListData /> : <p></p>}
          <SckrollNews />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
