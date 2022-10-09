import { createSlice } from "@reduxjs/toolkit";
import mockData from "utils/jsonData/mockData.json";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    searchTerm: null,
    searchMockData: mockData,
    searchMockDataEdited: mockData,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setEditedMockData: (state, action) => {
      state.searchMockDataEdited = action.payload;
    },
  },
});

export const { setSearchTerm, setEditedMockData } = DataSlice.actions;
export const getState = (state) => state;
export const getSearchTermValue = (state) => state.data.searchTerm;
export const getMockDataValue = (state) => state.data.searchMockData;
export const getEdittedMockData = (state) => state.data.searchMockDataEdited;
export default DataSlice.reducer;
