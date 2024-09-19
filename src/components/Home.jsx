import React from "react";
import Products from "./Products";


const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white  border-0">
        <img
          src="/assets/bag1.jpg"
          className="my-5 card-img-top left-0 right-0"
          alt="Background image"
          height="550px"
        />
        <div className="card-img-overlay d-flex">
          <div className="container ">
            <h5 className=" card-title display-3 fw-bolder mb-0 ">
              NEW ARRIVALS
            </h5>
            <p className="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
