import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../Services/API/apiCalling";
import { useEffect } from "react";

export default function Product() {
  let { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const product = products.find((el) => el._id === id);
  if (!product || !product.imageCover) {
    return <div>Loading...</div>; //  handle the loading state !!!!
  }
  return (
    <div className="container my-3">
      <div className="row  align-items-center">
        <div className="col-md-3">
          <img src={product.imageCover} className="w-100" alt="" />
          <h5 className="text-main">{product.price} $</h5>
          <button className="btn bg-main text-white w-100 my-3">
            Add To Cart
          </button>
        </div>
        <div className="col-md-6">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.category.name}</p>
        </div>
      </div>
    </div>
  );
}
