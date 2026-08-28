import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api";

const PublicRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me");
        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return null;
  }

  return authenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;