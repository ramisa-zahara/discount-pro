import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const TopBrands = () => {
  const [brandData, setBrandData] = useState([]);
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/brand/:id");
  };
  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrandData(data));
  }, []);
  return (
    <div>
      <header className="grid justify-center text-center py-6 gap-3 ">
        <span className="font-bold text-xl">Top Brands</span>
        <spaan>Find top brands with amazing discounts</spaan>
      </header>
      <div>
        <Marquee pauseOnHover>
          {brandData.map((brands) => (
            <div
              onClick={handleOnclick}
              key={brands.id}
              className="flex items-center justify-center w-40 h-40 mx-4 cursor-pointer"
            >
              <img src={brands.brand_logo} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
