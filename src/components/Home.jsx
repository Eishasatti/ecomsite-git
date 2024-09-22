import React from "react";
import Products from "./Products";
import Header from "./Header";

const Home = () => {
  return (
    <>
    <Header/>
    <div className=" my-2 py-2 hero">
      <div className="card right-0 left-0 text-white border-0">
        <img src="/assets/bag7.jpg" className="card-img w-full h-[650px]" alt="background image"/>
        <div className="card-img-overlay">
        
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
