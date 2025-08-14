// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const login = (jwtToken) => {
//     setToken(jwtToken);
//     localStorage.setItem("token", jwtToken);
//     navigate("/dashboard");
//   };

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem("token");
//     navigate("/auth");
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // NEW
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("access");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false); // done checking
  }, []);

  const login = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem("access", jwtToken);
    navigate("/dashboard");
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("access");
    navigate("/auth");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}