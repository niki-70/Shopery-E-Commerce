import { Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";

import OrderHistory from "./components/OrderHistory/OrderHistory";
import Faqs from "./pages/Faqs/Faqs";
import ShoppingCart from "./components/ShoppingCart/Section/ShoppingCart";
import Wishlist from "./pages/MyWishlist/Wishlist";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import Vegetables from "./components/common/Vegetables/Vegetables";
import ProductPage from "./pages/ProductPage/ProductPage";
import AllVegetables from "./pages/AllVegetables/AllVegetables";
import Auth from "./components/Auth/Auth";
import CreateAccount from "./components/CreateAccount/CreateAccount";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/*" element={<ErrorPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/orderhistory" element={<OrderHistory/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/shoppingcart" element={<ShoppingCart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/trackorder" element={< OrderDetails/>} />
        <Route path="/product" element={< ProductPage/>} />
        <Route path="/shop" element={< AllVegetables/>} />
        <Route path="/login" element={< Auth/>} />
        <Route path="/create" element={< CreateAccount/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
