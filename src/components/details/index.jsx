import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {
//   incrementsCounter,
//   decrementsCounter,
// } from "../../store/addToCartSlice";
import { addToCart,deleteFromCart } from "../../store/cartSlice";
export default function Details() {
  const list = useSelector((store) => store.cartStore.cartList);
  const count = useSelector((store) => store.cartStore.cartCount);
  console.log(list);
  console.log(count);

  const handlerAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const remove = (product) => {
    dispatch(deleteFromCart(product));
    console.log("ans");
  };



  const [product, setProduct] = useState({});
  useEffect(() => {
    getDataProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();
  // const increment = () => {
  //   dispatch(incrementsCounter(1));
  // };
  // const decrement = () => {
  //   dispatch(decrementsCounter(1));
  // };
  const getDataProducts = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <div>
      <div className="container  d-flex m-auto my-5">
        <div className="row my-5 d-flex m-auto justify-content-center">
          <div className="com-md-8 d-flex align-items-center border shadow p-3">
            <img src={product.image} alt="" className="w-25" />
            <div className="card_body text-center ">
              <h2 className="w-50 m-auto">{product.title}</h2>
              <h3 className="text-info py-1">{product.price} EGP</h3>
              {/* <h4> {product.rating.rate}    ⭐</h4> */}
              <button
                className=" p-2 btn btn-success"
                type="button"
                // onClick={addToCart}
                onClick={() => {
                  // increment(1);
                  handlerAddToCart(product);
                }}
              >
                🛒 addTocart
              </button>
              <button className="btn btn-danger  p-2" onClick={() => {
                            remove(product);
                          }}>
                🛒 remove
              </button>
              


              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
