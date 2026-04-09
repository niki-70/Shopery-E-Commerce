function SearchBar() {

// import Styles from './Navbar.module.css'

  return (
    <div className="navbarSec mt-5 mr-12 mb-0 ml-12 ">
      <div className="searchBar flex justify-between pb-5">
        <div className="logo">
          <img src="src/assets/Images/logo/Group.png" alt="" />
        </div>
        <div className="search flex items-center">
          <input className="input pt-1 pr-12 pb-1 pl-12" type="" placeholder="search" />
          <div className="click pt-1 pr-2.5 pb-1 pl-2.5 bg-green-500 text-white rounded-lg ">Search</div>
        </div>
        <div className="contactUs flex justify-between items-center"> 
          <div className="wishlist mr-2.5 ml-2.5">
            <img src="src/assets/Images/icons/Heart (1).png" alt="" />
          </div>

          <img
            className="divider h-full"
            src="src/assets/Images/icons/Devider.png"
            alt=""
          />

          <div className="shoppingCart mr-2.5 ml-2.5 flex">
            <div className="bag ml-0.5">
              <img src="src/assets/Images/icons/Rectangle.png" alt="" />
            </div>
          </div>
          <div className="totalAmount mr-5 ml-5">
            <p className="sc w-max">Shopping Cart</p>
            <h5>$57.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
