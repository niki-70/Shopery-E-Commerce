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
    </>
  );
}

export default App;
