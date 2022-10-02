import React, { Component } from "react";
import style from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonData from "utils/jsonData/newsData.json";

const ScrollNews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={style.general_wrapper}>
      <div className={style.wrapper}>
        <Slider {...settings}>
          {jsonData.news.map((element) => (
            <div className={style.itemWrapper}>
              <img src={element.newsimage} />
              <p className={style.title}>{element.newstitle}</p>
              <div className={style.innerItems}>
                <p>{element.date}</p>
                <p>{element.newsaurhor}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ScrollNews;
