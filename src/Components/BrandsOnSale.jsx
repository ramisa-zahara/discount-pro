import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandsOnSale = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/brand/:id");
  };
  const sale = brands.filter((brand) => brand.isSaleOn);
  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className=" mt-6">
      <div className="grid justify-center text-xl font-bold ">
        Brands On Sale
      </div>
      <div className="my-10">
        {/* Brands on Sale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sale.map((brand) => (
            <div
              key={brand._id}
              className="border solid border-lime-300 shadow-md rounded-lg p-4 hover:shadow-lg "
            >
              <div className="flex items-center mb-4">
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{brand.brand_name}</h3>
                  <p className="text-sm text-gray-500">{brand.category}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Total Coupons: {brand.coupons.length}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={handleOnclick}
                  className="bg-lime-400 border solid border-lime-500 rounded-xl text-white py-2 px-4"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsOnSale;
