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
    </>
  );
}

export default App;
