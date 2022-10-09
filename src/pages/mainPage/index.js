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
          <div className={style.image_wrapper}>
            <img src={tesodevImage} />
          </div>
          <div className={style.page_title}>
            <h3>Find in Records</h3>
            <SearchInput />
          </div>
          {getEditedValue[0] !== undefined ? (
            <BasicListData />
          ) : (
            <p className={style.null_section}>...</p>
          )}
          <SckrollNews />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
