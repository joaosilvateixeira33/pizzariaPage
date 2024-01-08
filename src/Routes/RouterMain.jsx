import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/index";
import { LoginPage } from "../pages/LoginPage/index";
import { RegisterPage } from "../pages/RegisterPage/index";
import { DashboardPage } from "../pages/DashboardPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage/>}/>
    </Routes>
  );
};
