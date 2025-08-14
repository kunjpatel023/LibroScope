import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [access, setAccess] = useState(null);
  const [loading, setLoading] = useState(true); // <- prevent early redirect
  const navigate = useNavigate();

  useEffect(() => {
    const storedAccess = localStorage.getItem("access");
    if (storedAccess) {
      setAccess(storedAccess);
    }
    setLoading(false); // finished checking
  }, []);

  const login = (jwtAccess) => {
    setAccess(jwtAccess);
    localStorage.setItem("access", jwtAccess);
    navigate("/dashboard");
  };

  const logout = () => {
    setAccess(null);
    localStorage.removeItem("access");
    navigate("/auth");
  };

  return (
    <AuthContext.Provider value={{ access, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
