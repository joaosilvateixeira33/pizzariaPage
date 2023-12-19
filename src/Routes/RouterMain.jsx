import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/index";
import { LoginPage } from "../pages/LoginPage/index";
import { RegisterPage } from "../pages/RegisterPage/index";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
