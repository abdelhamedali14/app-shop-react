import { useEffect, useState } from "react";
import "./style.css";
import Product from "../product";

export default function Shop(props) {
  useEffect(() => {
    getDataProducts();
  }, []);
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
          return <Product key={Product.id} item={product}></Product>;
        })}
      </div>
    </div>
  );
}
