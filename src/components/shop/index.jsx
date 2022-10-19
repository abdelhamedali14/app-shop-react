import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch,useSelector } from "react-redux";
// import {
//   incrementsCounter,
//   decrementsCounter,
// } from "../../store/addToCartSlice";
import {addToCart,deleteFromCart} from "../../store/cartSlice"

export default function Shop(props) {
  const dispatch = useDispatch();
  // const increment = () => {
  //   dispatch(incrementsCounter(1));
  // };
  // const decrement = () => {
  //   dispatch(decrementsCounter(1));
  // };

  const list = useSelector((store) => store.cartStore);
  console.log(list);

  const handlerAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const remove = (product) => {
    dispatch(deleteFromCart(product));
    console.log("ans");
  };


  useEffect(() => {
    getDataProducts();
  }, []);
  // console.log(props.currentValue);
  const [products, setProduct] = useState([]);
  function getDataProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }
  return (
    <div className="container my-5">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4 py-2  text-center">
              <div className="card  d-flex p-2 shadow m-auto rounded-5">
                <div className="image_wrapper text-center m-auto py-1">
                  <img
                    src={product.image}
                    className="card-img-top "
                    alt="..."
                  />
                </div>
                <h6 className="card-title m-0 ">{product.title}</h6>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="text-danger mx-2 fs-4 fw-bold">
                    {" "}
                    {product.price} LE
                  </p>{" "}
                  <p className="mx-2  fs-5">{product.rating.rate} ⭐</p>
                </div>
                <div className=" d-flex  justify-content-center py-2">
                  <button
                    className=" p-2 btn btn-success"
                    type="button"
                 
                    onClick={() => {
                  
                      handlerAddToCart(product)
                    }}
                  >
                    🛒 addTocart
                  </button>
                  <button
                    className="btn btn-danger  p-2"
                    onClick={() => {
                 
                      remove(product)
                    }}
                  >
                  
                    🛒 remove
                  </button>
                </div>
                <Link
                  to={`/Details/${product.id}`}
                  className="btn btn-outline-primary my-1 "
                >
                  details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
