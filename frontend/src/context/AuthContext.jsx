import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    navigate("/dashboard");
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
