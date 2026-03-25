import TeamCard from "./components/TeamCard/TeamCard";
import ProductCard from "./components/ProductCard/ProductCard";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import Navbar from "./components/layout/Navbar/Navbar";
import Button from "./components/common/Button/Button";
import FeaturedServices from "./components/pages/Home/sections/FeaturedServices";
import DealOfTheMonth from "./components/pages/Home/sections/DealOfTheMonth";
import AboutSection from "./components/pages/Home/Sections/AboutSection";
import Banner from "./components/pages/Home/sections/Banner";
import ProductList from "./components/ProductList/ProductList";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import HeroSection from "./components/pages/Home/Sections/HeroSection";
import SaleCard from "./components/SaleCard/SaleCard";
import ContactSection from "./components/pages/Home/Sections/ContactSection";
import Footer from "./components/layout/Footer/Footer";
import Logos from "./components/pages/Home/Sections/Logos";
import NewsLetterModal from "./components/modals/NewsLetterModal";
import ProductModal from "./components/modals/ProductModal"
import ProductDiscription from "./components/ProductDiscription/ProductDiscription";
import ContactPage from "./components/Contact/ContactPage";
import Wishlist from "./components/MyWishlist/Wishlist";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CartTotal from "./components/ShoppingCart/CartTotal";
import BillingInfo from "./components/Checkout/Sections/BillingInfo";
import OrderSummery from "./components/Checkout/Sections/OrderSummery";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import Filters from "./components/Filters/Filters";
import Auth from "./components/Auth/Auth";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import UserPortal from "./components/UserPortal/UserPortal";
import OrderHistory from "./components/OrderHistory/Sections/OrderHistory";
import OrderDetail from "./components/OrderHistory/OrderDetails";
import AccountSetting from "./components/Settings/Section/AccountSetting";
import BillingAddress from "./components/Settings/Section/BillingAddress";
import ChangePassword from "./components/Settings/ChangePassword";
import Profile from "./components/Dashboard/Sections/Profile";
import Address from "./components/Dashboard/Sections/Address";

function App() {
  return (
    <>
      <Banner />
      <AboutSection />
      <DealOfTheMonth />
      <FeaturedServices />
      <Button icon={<img src="src/assets/images/icons/rightArrow.png" />}>
        Shop Now
      </Button>
      <Navbar />
      <TeamCard />
      <ProductCard />
      <TestimonialCard />
      <ProductList />
      <CategoryCard />
      <HeroSection />
      <SaleCard />
      <ContactSection />
      <Footer />
      <Logos />
      <NewsLetterModal />
      <ProductModal/>
      <ProductDiscription/>
      <ContactPage/>
      <Wishlist/>
      <ShoppingCart/>
      <CartTotal/>
      <BillingInfo/>
      <OrderSummery/>
      <ShoppingCard/>
      <Filters/>
      <Auth/>
      <CreateAccount/>
      <UserPortal/>
      <OrderHistory/>
      <OrderDetail/>
      <AccountSetting/>
      <BillingAddress/>
      <ChangePassword/>
      <Profile/>
      <Address/>
    </>
  );
}

export default App;
