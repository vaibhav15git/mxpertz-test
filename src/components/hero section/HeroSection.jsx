import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section ">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row justify-content-center align-items-center hero-content header-div">
          <h1
            className="hero-heading text-center"
            style={{ marginTop: "100px" }}
          >
            Only Quality Food
          </h1>
        </div>
        <div className="row justify-content-center align-items-center hero-content text-align-center mt-4">
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus{" "}
            <br />
            odit impedit nostrum ea quidem odio eveniet, dolores amet culpa
            asperiores laudantium possimus <br /> voluptas harum delectus
            voluptatem. Delectus, odit eaque.
          </p>
        </div>

        <div className="justify-content-center align-items-center hero-content header-div mt-5">
          <button
            className="p-1"
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
            }}
          >
            VIEW MENU
          </button>
          <button
            className="p-1 ms-2"
            style={{ backgroundColor: "orange", color: "white" ,border:"none"}}
          >
            RESERVATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
