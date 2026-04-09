import Navigation from "./Sections/Navigation";
import SearchBar from "./Sections/SearchBar";
import Topbar from "./Sections/Topbar";

function Navbar() {
  return (
    <>
      <Topbar />
      <hr />
      <SearchBar />
      <Navigation/>
    </>
  );
};

export default Navbar;
