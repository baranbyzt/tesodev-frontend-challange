import { configureStore } from "@reduxjs/toolkit";
import SearchData from "./SearchSlice";

export default configureStore({
  reducer: {
    data: SearchData,
  },
});
