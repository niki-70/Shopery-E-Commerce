import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import call from "../../../assets/Images/icons/call.png";

const Navigation = () => {
  return (
    <div>
      <div className="navigation bg-black pr-12 pl-12">
        <div className="navbar flex justify-between pt-6 pr-5 pb-6 pl-5 text-xl">
          <div className="list items-center">
            <Link className="home text-white mr-5 no-underline " to={ROUTES.HOME}>
              Home
            </Link>
            <Link className="shop text-white mr-5 no-underline " to={ROUTES.SHOP}>
              Shop
            </Link>
            <Link className="blog text-white mr-5 no-underline " to={ROUTES.BLOG}>
              Blog
            </Link>
            <Link className="aboutUs text-white mr-5 no-underline " to={ROUTES.ABOUT}>
              About Us
            </Link>
            <Link className="contact text-white mr-5 no-underline " to={ROUTES.CONTACT}>
              Contact Us
            </Link>
          </div>

          <div className="contactNo flex">
            <img
              className="contactImg w-5 h-5 mr-2.5"
              src={call}
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
