import style from "./style.module.css";

const NewsItem = ({ data }) => {
  return (
    <div className={style.itemWrapper}>
      <img src={data.newsimage} />
      <p className={style.title}>{data.newstitle}</p>
      <div className={style.innerItems}>
        <p>{data.date}</p>
        <p>{data.newsaurhor}</p>
      </div>
    </div>
  );
};

export default NewsItem;
