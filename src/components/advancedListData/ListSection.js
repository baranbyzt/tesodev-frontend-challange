import React from "react";
import location from "assets/svg/location.svg";

function ListSection({ posts }) {
  return (
    <div className="wrapper">
      {posts.map((val, index) => (
        <PostList key={index} data={val} />
      ))}
    </div>
  );
}
export default ListSection;

const PostList = ({ data }) => {
  return (
    <>
      <div className="post-wrapper">
        <div className="left-section">
          <img className="location-img" src={location} />
          <div className="info">
            <p className="post-item">{data[1]}</p>
            <div className="location-section">
              <p className="post-item post-location">{data[4]}, </p>
              <p className="post-item post-location">{data[5]}</p>
            </div>
          </div>
        </div>

        <div className="date-name">
          <p className="post-item post-name">{data[0]}</p>
          <p className="post-item post-date">{data[3]}</p>
        </div>
      </div>
      <hr className="border" />
    </>
  );
};
