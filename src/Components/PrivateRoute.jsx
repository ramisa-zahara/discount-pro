// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="flex items-center justify-center">
        <span className="loading loading-bars loading-lg "></span>
      </span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
