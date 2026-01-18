// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

 const  AppRouter = () => {
    const {isLoggedIn} = useContext(AppContext);
  const isAuthenticated = isLoggedIn; // TEMP: replace later with real auth

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <LandingPage /> : <Navigate to="/" replace />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
