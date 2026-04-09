import React from "react";

const Navigation = () => {
  return (
    <div>
      <div className="navigation bg-black pr-12 pl-12">
        <div className="navbar flex justify-between pt-6 pr-5 pb-6 pl-5 text-xl">
          <div className="list items-center">
            <a className="home text-white mr-5 no-underline " href="#">
              Home
            </a>
            <a className="shop text-white mr-5 no-underline " href="#">
              Shop
            </a>
            <a className="blog text-white mr-5 no-underline " href="#">
              Blog
            </a>
            <a className="aboutUs text-white mr-5 no-underline " href="#">
              About Us
            </a>
            <a className="contact text-white mr-5 no-underline " href="#">
              Contact Us
            </a>
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
