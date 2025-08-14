// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
<<<<<<< Updated upstream
//     const storedToken = localStorage.getItem("token");
=======
//     const storedToken = localStorage.getItem("access");
>>>>>>> Stashed changes
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const login = (jwtToken) => {
//     setToken(jwtToken);
<<<<<<< Updated upstream
//     localStorage.setItem("token", jwtToken);
=======
//     localStorage.setItem("access", jwtToken);
>>>>>>> Stashed changes
//     navigate("/dashboard");
//   };

//   const logout = () => {
//     setToken(null);
<<<<<<< Updated upstream
//     localStorage.removeItem("token");
=======
//     localStorage.removeItem("access");
>>>>>>> Stashed changes
//     navigate("/auth");
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
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