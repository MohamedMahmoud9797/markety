import { useDispatch, useSelector } from "react-redux";
import { clear, removeFromCart } from "../../Redux/cart/cart";

export default function Cartitems() {
  const dispatch = useDispatch();

  const addeditems = useSelector((state) => state.cart);
  console.log(addeditems);
  const totalPrice = addeditems.cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <>
      <h1 className="text-center">Cart Items</h1>
      <div className="row justify-content-center">
        {addeditems.cartItems.map((item) => (
          <>
            <div className="col-md-3">
              <div key={item._id}>
                <img src={item.imageCover} className="w-100" alt="" />
                <h6 className="text-main my-2">{item.category.name}</h6>
                <p className="fw-bolder">
                  {item.title.split().slice(0, 2).join(" ")}
                </p>
                <div>
                  <h5 className="text-main">{item.price} $</h5>
                </div>
                <button
                  className="btn bg-main text-white w-100 my-3"
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </>
        ))}
        <div className="text-center bg-main w-25 m-auto text-white">
          checkout : {totalPrice} USD
        </div>
        <button
          className="btn bg-danger text-white w-100 my-3  w-25 m-auto"
          onClick={() => {
            dispatch(clear());
          }}
        >
          Remove all products
        </button>
      </div>
    </>
  );
}
