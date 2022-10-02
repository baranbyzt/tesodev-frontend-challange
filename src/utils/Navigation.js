import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import MainPage from "pages/mainPage";
import ListDataPage from "pages/listDataPage";
import AddDataPage from "pages/addDataPage";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/listdata" element={<ListDataPage />} />
        <Route path="/savedata" element={<AddDataPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
