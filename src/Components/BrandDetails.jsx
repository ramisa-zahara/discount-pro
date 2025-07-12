import React, { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";

const BrandDetails = () => {
  const auth = useContext(AuthContext);
  return <div>brand details</div>;
};

export default BrandDetails;
