import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import MapPin from "../../../assets/Images/icons/Map Pin.png";
import Devider from "../../../assets/Images/icons/Devider.png";


function Topbar(){
// import Styles from "./Navbar.module.css";


  return (
    <div className="navbarSec mt-5 mr-12 mb-0 ml-12">
      <div className="topBar pb-5 flex justify-between">
        <div className="rightTopBar flex ">
          <div className="map">
            <img className="mapImg pr-1 " src={MapPin} alt="" />
          </div>
          <div className="address oklch(87.2% 0.01 258.338) ">
            <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
          </div>
        </div>
        <div className="leftTopBar flex items-center oklch(87.2% 0.01 258.338)">
          <div className="lang mr-3.5">
            <select name="" id="">
              <option value="">Eng</option>
              <option value="">Hindi</option>
              <option value="">French</option>
            </select>
          </div>
          <div className="curr mr-3.5">
            <select className="options border-none oklch(87.2% 0.01 258.338) " name="" id="">
              <option value="">USD</option>
              <option value="">Eur</option>
              <option value="">INR</option>
            </select>
          </div>

          <img src={Devider} alt="" />

          <span className="sign mr-3.5">
            <Link className="" to={ROUTES.LOGIN}>
            Sign in
            </Link>
             / 
             <Link className="" to={ROUTES.CREATE_ACCOUNT}>
             Sign up
             </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
