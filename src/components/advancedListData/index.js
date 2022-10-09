import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import ListSection from "./ListSection";
import updown from "assets/svg/updown.svg";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getEdittedMockData, setEditedMockData } from "store/SearchSlice";

function AdvancedListData() {
  const getEditedValue = useSelector(getEdittedMockData);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [show, setShow] = useState(false);
  let dispatch = useDispatch();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    setPosts(getEditedValue);
  }, [getEditedValue]);

  let orderBtnControl = () => {
    show ? setShow(false) : setShow(true);
  };

  let repeatedDispatch = (value) => {
    return dispatch(setEditedMockData(value));
  };

  let nameAscending = async () => {
    let arr = [];
    await getEditedValue.map((val) =>
      arr.push([val[0], val[1], val[2], val[3], val[4], val[5]])
    );
    await repeatedDispatch(arr.sort().reverse());
  };

  let nameDescending = async () => {
    let arr = [];
    await getEditedValue.map((val) =>
      arr.push([val[0], val[1], val[2], val[3], val[4], val[5]])
    );
    await repeatedDispatch(arr.sort());
  };

  return (
    <div className="list-data-container">
      <div>
        <ListSection data={currentPosts} />
        <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      </div>

      <div className="order-container">
        <div className="order-btn" onClick={orderBtnControl}>
          <img src={updown} />
          Order By
        </div>

        <div
          className="order-by"
          style={{ visibility: show ? "visible" : "hidden" }}
        >
          <p onClick={nameAscending}>Name ascending</p>
          <p onClick={nameDescending}>Name descending</p>
        </div>
      </div>
    </div>
  );
}
export default AdvancedListData;
