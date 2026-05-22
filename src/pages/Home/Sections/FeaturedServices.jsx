import deliveryTruck from "../../../assets/Images/icons/deliveryTruck.png";
import headphones from "../../../assets/Images/icons/headphones.png";
import shoppingBag from "../../../assets/Images/icons/shoppingBag.png";
import packageIcon from "../../../assets/Images/icons/package.png";
function FeaturedServices() {
  return (
    <>
      <div className="featuredSec flex  m-auto  shadow-lg w-fit">
        <div className="featuredBox p-3 pt-8 pr-8 hover:bg-green-600 hover:text-white ">
          <div className="featuredIcon w-max pt-4 pr-2.5 pb-4 pl-2.5 rounded-full bg-white border border-gray-300">
            <img className="w-10 h-9" src={deliveryTruck} alt="" />
          </div>
          <div className="featuredInfo">
            <h4 className="font-bold ">Free Shipping</h4>
            <p>Free shipping with discount</p>
          </div>
        </div>

        <div className="featuredBox p-3 pt-8 pr-8 hover:bg-green-600 hover:text-white">
          <div className="featuredIcon w-max pt-4 pr-2.5 pb-4 pl-2.5 rounded-full bg-white border border-gray-300">
            <img className="w-10 h-9" src={headphones} alt="" />
          </div>

          <div className="featuredInfo pb-5">
            <h4 className="font-bold">Free shipping with discount</h4>
            <p>Instant access to Contact</p>
          </div>
        </div>

        <div className="featuredBox p-3 pt-8 pr-8 hover:bg-green-600 hover:text-white">
          <div className="featuredIcon w-max pt-4 pr-2.5 pb-4 pl-2.5 rounded-full bg-white border border-gray-300">
            <img className="w-10 h-9" src={shoppingBag} alt="" />
          </div>

          <div className="featuredInfo">
            <h4 className="font-bold">100% Sucure Payment</h4>
            <p>Instant access to Contact</p>
          </div>
        </div>

        <div className="featuredBox p-3 pt-8 pr-8 hover:bg-green-600 hover:text-white">
          <div className="featuredIcon w-max pt-4 pr-2.5 pb-4 pl-2.5 rounded-full bg-white border border-gray-300">
            <img className="w-10 h-9" src={packageIcon} alt="" />
          </div>

          <div className="featuredInfo">
            <h4 className="font-bold">Money-Back Guarantee</h4>
            <p>30 days money-back guarantee</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedServices;
