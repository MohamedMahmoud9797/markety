import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Services/API/apiCalling";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);

  return (
    <div className="container">
      <div className="row">
        {products?.map((item) => (
          <>
            <div className="col-md-2">
              <Link to={"/productDetails/" + item._id}>
                <div className="product">
                  <div key={item._id}>
                    <img src={item.imageCover} className="w-100" alt="" />
                    <h6 className="text-main my-2">{item.category.name}</h6>
                    <p className="fw-bolder">
                      {item.title.split().slice(0, 2).join(" ")}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-main">{item.price} $</h5>
                  </div>
                  <button className="btn bg-main text-white w-100 my-3">
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
