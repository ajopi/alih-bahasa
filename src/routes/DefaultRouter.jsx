import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardApp from "../pages/DashboardApp/DashboardApp";
import Signed from "../pages/DashboardApp/Signed/Signed";

const DefaultRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/signed" element={<Signed />} />
        <Route path="/dashboard" element={<DashboardApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DefaultRouter;
