// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function PrivateRoute({ children }) {
//   const { token } = useContext(AuthContext);
//   return token ? children : <Navigate to="/auth" />;
// }


<<<<<<< Updated upstream
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";


// export default function ProtectedRoute({ children }) {
//   const { access, loading } = useContext(AuthContext);

//   if (loading) return null; // or spinner

//   return access ? children : <Navigate to="/auth" replace />;
// }

=======
>>>>>>> Stashed changes

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // or spinner
  }

  return token ? children : <Navigate to="/auth" />;
}