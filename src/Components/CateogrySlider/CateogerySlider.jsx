import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getCateogries } from "./../../Services/API/apiCalling";

export default function CateogerySlider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCateogries());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.categories);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
  };

  return (
    <Container>
      <Slider {...settings} className="my-3">
        {categories?.map((item) => (
          <div key={item._id}>
            <img
              className="w-100"
              src={item.image}
              alt="First slide"
              height={300}
            />
            <p className="text-center">{item.slug}</p>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
