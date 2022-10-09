import React from "react";
import PostList from "./PostList";

function ListSection({ data }) {
  return (
    <div className="wrapper">
      {data.map((val, index) => (
        <PostList key={index} data={val} />
      ))}
    </div>
  );
}
export default ListSection;
