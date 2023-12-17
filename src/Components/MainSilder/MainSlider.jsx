import slider2 from "../../assets/images/grocery-banner-2.jpeg";
import slider3 from "../../assets/images/slider-2.jpeg";
import slider1 from "../../assets/images/grocery-banner.png";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  };
  return (
    <Container>
      <Slider {...settings} className="my-5">
        <img src={slider2} alt="" className="w-100" />
        <img src={slider3} alt="" className="w-100" />
        <img src={slider1} alt="" className="w-100" />
      </Slider>
    </Container>
  );
}
