import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { access, loading } = useContext(AuthContext);

  if (loading) return null; // or spinner

  return access ? children : <Navigate to="/auth" replace />;
}
