import style from "./style.module.css";
import img from "assets/images/image1.jpg";

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
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1664628368736!5m2!1str!2str"
      className={style.maps_section}
    ></iframe>
  );
};
