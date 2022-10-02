import style from "./style.module.css";
import Footer from "components/footer";
import SckrollNews from "components/scrollNews";

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <SckrollNews />
      <Footer />
    </div>
  );
};

export default MainPage;
