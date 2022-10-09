import style from "./style.module.css";
import img from "assets/images/image1.jpg";
import { mapImage } from "utils/ComponentsUtils";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <ContentItem />
      <MapItem />
    </div>
  );
};

export default Footer;

const ContentItem = () => {
  return (
    <div className={style.info_section}>
      <img src={img} />
      <div className={style.content}>
        <h3>İletişim</h3>
        <p>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul Email:
        </p>
        <a href="mailto:bilgi@tesodev.com">Email: bilgi@tesodev.com</a>
      </div>
    </div>
  );
};

const MapItem = () => {
  return <iframe src={mapImage} className={style.maps_section}></iframe>;
};
