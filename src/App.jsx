import MainSlider from "./Components/MainSilder/MainSlider";
import Navbarr from "./Components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CateogerySlider from "./Components/CateogrySlider/CateogerySlider";
import Products from "./Components/Products/Products";

function App() {
  return (
    <>
      <Navbarr />
      <MainSlider />
      <CateogerySlider />
      <Products />
    </>
  );
}

export default App;
