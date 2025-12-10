// src/routes.jsx
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AppContent from "./AppContent";
import Login from "./components/Login";

function LoginWithHandler() {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", credentials.email);

    // redirecionar para um cliente padrão (ex: 33)
    navigate("/dashboard/33");
  };

  return <Login onLogin={handleLogin} />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWithHandler />} />
        <Route path="/dashboard/:clientId" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}
