import AdvancedListData from "components/advancedListData";
import SearchInput from "components/searchInput";
import tesodevImage from "assets/images/tesodev.jpg";
import style from "./style.module.css";
import LinkNavigate from "components/linkNavigate";

const ListDataPage = () => {
  return (
    <div>
      <div className={style.header_wrapper}>
        <img className={style.header_image} src={tesodevImage} />
        <SearchInput />
      </div>
      <AdvancedListData />
      <LinkNavigate />
    </div>
  );
};

export default ListDataPage;
