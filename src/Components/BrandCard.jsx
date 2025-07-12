import React, { useEffect, useState } from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";

const BrandCard = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/brand/:id");
  };
  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="border solid border-lime-400 rounded-xl mx-6 lg:mx-96 w-auto grid grid-cols-1 items-center mb-5 hover:shadow-lg shadow-md"
        >
          <div className="flex gap-8 m-6">
            <div className="grid gap-2 ">
              <img
                src={brand.brand_logo}
                alt=""
                className="h-10 rounded-full"
              />

              <span>{brand.rating}</span>
            </div>
            <div className="grid gap-2">
              <h2 className="font-bold text-xl">{brand.brand_name}</h2>
              <span className="">{brand.description}</span>
            </div>
          </div>

          <div className="flex justify-end items-center gap-7 mb-5 pr-10">
            {brand.isSaleOn && (
              <p className="text-red-500 font-bold text-lg animate__animated animate__bounce">
                Sale is on!
              </p>
            )}
            <button
              onClick={handleOnclick}
              className=" border solid border-lime-500 p-3 rounded-2xl bg-lime-300 font-bold "
            >
              View Coupons
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandCard;
