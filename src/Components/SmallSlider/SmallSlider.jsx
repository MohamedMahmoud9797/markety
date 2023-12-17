import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { getCaogries } from "./../../Services/getCategories";
import { useDispatch, useSelector } from "react-redux";

export default function SmallSlider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCaogries());
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
  console.log(categories);

  return (
    <Container>
      <Slider {...settings} className="my-3">
        {categories?.map((item) => (
          <div key={item.id}>
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
