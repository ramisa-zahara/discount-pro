import React, { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import { useLoaderData } from "react-router-dom";

const Brands = () => {
  return (
    <div>
      <div className="navbar flex justify-center gap-4 mb-10">
        <div className="flex">
          <a className="font-bold text-2xl">All Brands</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search Brands"
              className="input input-bordered w-24 md:w-auto hover:border-lime-500"
            />
          </div>
        </div>
      </div>
      <BrandCard></BrandCard>
    </div>
  );
};

export default Brands;
