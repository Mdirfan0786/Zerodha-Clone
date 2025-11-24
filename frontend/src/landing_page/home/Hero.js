import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Home Image"
          className="mb-5"
        />

        <h1 className="mt-5">Invest in everything</h1>

        <p className="p-3">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <Link to="/signup" style={{ width: "18%", margin: "0 auto" }}>
          <button className="p-2 btn btn-primary fs-5 mb-5 w-100">
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
