import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default MainRoutes;
