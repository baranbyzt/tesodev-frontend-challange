import React, { Component } from "react";
import style from "./style.module.css";
import NewsItem from "./NewsItem";
import { SampleNextArrow, SamplePrevArrow } from "./CustomSlider";
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={style.general_wrapper}>
      <h3>Top News</h3>
      <div className={style.wrapper}>
        <Slider {...settings}>
          {jsonData.news.map((element, index) => (
            <div key={index}>
              <NewsItem data={element} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ScrollNews;
