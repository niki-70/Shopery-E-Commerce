import TeamCard from "./components/TeamCard/TeamCard";
import ProductCard from "./components/common/ProductCard/ProductCard";
import TestimonialCard from "./components/common/TestimonialCard/TestimonialCard";
import Navbar from "./components/layout/Navbar/Navbar";
import ProductList from "./components/common/ProductList/ProductList";
import CategoryCard from "./components/common/CategoryCard/CategoryCard";
import SaleCard from "./components/SaleCard/SaleCard";
import Footer from "./components/layout/Footer/Footer";
import NewsLetterModal from "./components/modals/NewsLetterModal";
import ProductModal from "./components/modals/ProductModal";
import ProductDiscription from "./components/ProductDiscription/ProductDiscription";
import Contact from "./components/pages/Contact/Contact";
import Wishlist from "./components/pages/MyWishlist/Wishlist";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "./components/pages/Home/Home";
import CartTotal from "./components/ShoppingCart/CartTotal";
import BillingInfo from "./components/pages/Checkout/Sections/BillingInfo";
import OrderSummery from "./components/pages/Checkout/Sections/OrderSummery";
import ShoppingCard from "./components/modals/ShoppingCard";
import Filters from "./components/Filters/Filters";
import Auth from "./components/Auth/Auth";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import UserPortal from "./components/UserPortal/UserPortal";
import OrderHistory from "./components/OrderHistory/Sections/OrderHistory";
import OrderDetail from "./components/OrderHistory/OrderDetails";
import AccountSetting from "./components/pages/Settings/Section/AccountSetting";
import BillingAddress from "./components/pages/Settings/Section/BillingAddress";
import ChangePassword from "./components/pages/Settings/Section/ChangePassword";
import Profile from "./components/pages/Dashboard/Sections/Profile";
import Address from "./components/pages/Dashboard/Sections/Address";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import CategorySection from "./components/pages/Home/Sections/CategorySection";
import Faqs from "./components/pages/Faqs/Faqs";
import TestimonialSection from "./components/pages/Home/Sections/TestimonialSection";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import BlogCard from "./components/common/BlogCard/BlogCard";
import Blogs from "./components/pages/Blogs/Blogs";
import About from "./components/pages/About/About";
import BlogPage from "./components/pages/Blogs/Sections/BlogPage";

function App() {
  return (
    <>
    <About />
      <TestimonialSection />
      <CategorySection />
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
      <Contact />
      <Wishlist />
      <ShoppingCart />
      <ProductModal />
      <ProductDiscription />
      <Contact />
      <Wishlist />
      <ShoppingCart />
      <CartTotal />
      <BillingInfo />
      <OrderSummery />
      <ShoppingCard />
      <Filters />
      <Auth />
      <CreateAccount />
      <UserPortal />
      <OrderHistory />
      <OrderDetail />
      <AccountSetting />
      <BillingAddress />
      <ChangePassword />
      <Profile />
      <Address />
      <Dashboard/>
      <Faqs />
      <ErrorPage />
      <BlogCard/>
      <Blogs/>
      <BlogPage/>


    </>
  );
}

export default App;
