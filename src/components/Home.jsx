import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white  border-0">
        <img
          src="/assets/bag2.jpg"
          class="card-img-top"
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
    </div>
  );
};

export default Home;
