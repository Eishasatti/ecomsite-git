import React from "react";
import Products from "./Products";


const Home = () => {
  return (
    <>
    
    <div className="container-fluid w-full my-2 py-2 hero">
      <div className="card container-fluid text-white border-3 w-full">
        <img src="/assets/bag7.jpg" className="card-img w-full h-[650px]" alt="background image"/>
        <div className="card-img-overlay w-full container-fluid">
        
          <p className="text-5xl py-4 my-2 font-extrabold text-black">NEW ARRIVALS</p>
          <p className="text-3xl font-bold text-green-500">Explore our diverse range, each piece a testament to unparalleled craftsmanship and timeless design, and find the perfect companion for your journey.


</p>
        </div>
      </div>
    </div>
      <Products />
    </>
  );
};

export default Home;
