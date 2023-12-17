import MainSlider from "./Components/MainSilder/MainSlider";
import Navbarr from "./Components/Navbar/Navbar";
import SmallSlider from "./Components/SmallSlider/SmallSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Navbarr />
      <MainSlider />
      <SmallSlider />
    </>
  );
}

export default App;
