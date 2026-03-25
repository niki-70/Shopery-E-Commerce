import TeamCard from "./components/TeamCard/TeamCard";
import ProductCard from "./components/common/ProductCard/ProductCard";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import Navbar from "./components/layout/Navbar/Navbar";
import ProductList from "./components/common/ProductList/ProductList";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import SaleCard from "./components/SaleCard/SaleCard";
import Footer from "./components/layout/Footer/Footer";
import NewsLetterModal from "./components/modals/NewsLetterModal";
import ProductModal from "./components/modals/ProductModal"
import ProductDiscription from "./components/ProductDiscription/ProductDiscription";
import Contact from "./components/pages/Contact/Contact";
import Wishlist from "./components/MyWishlist/Wishlist";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "./components/pages/Home/Home";
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
      <ProductCard />
      <Navbar />
      <Home />
      <Footer />
      <TeamCard />
      <ProductCard />
      <TestimonialCard />
      <ProductList />
      <CategoryCard />
      <SaleCard />
      <NewsLetterModal />
      <ProductModal />
      <ProductDiscription />
      <Contact />
      <Wishlist />
      <ShoppingCart />
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
