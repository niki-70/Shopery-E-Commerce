import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation bg-black pr-12 pl-12">
        <div className="navbar flex justify-between pt-6 pr-5 pb-6 pl-5 text-xl">
          <div className="list items-center">
            <Link className="home text-white mr-5 no-underline " to="/">
              Home
            </Link>
            <Link className="shop text-white mr-5 no-underline " to="/shop">
              Shop
            </Link>
            <Link className="blog text-white mr-5 no-underline " to="/blog">
              Blog
            </Link>
            <Link className="aboutUs text-white mr-5 no-underline " to="/about">
              About Us
            </Link>
            <Link className="contact text-white mr-5 no-underline " to="/contact">
              Contact Us
            </Link>
          </div>

          <div className="contactNo flex">
            <img
              className="contactImg w-5 h-5 mr-2.5"
              src="src/assets/Images/icons/call.png"
              alt=""
            />
            <h5 className="number text-white">(219) 555-0114</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
