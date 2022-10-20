import img from "../../../src/assets/123.svg";


import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/cartSlice";
import "./addToCart.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function AddToCart() {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.cartStore.cartList);
  const [total, setTotal] = useState(0);

  const remove = (product) => {
    dispatch(deleteFromCart(product));
  };
  const totalAmount = () => {
    let total = 0;
    list.map((item) => {
      return (total += item.price * item.quantity);
    });
    setTotal(total);
    console.log(total);
  };
  useEffect(() => {
    totalAmount();
  });

  const increase = (product) => {
    dispatch(increaseQuantity(product));
    totalAmount();
  };
  const decrease = (product) => {
    dispatch(decreaseQuantity(product));
    totalAmount();
  };
  return ( 
    <div>
  
      {!list.length ? (  <div className="container  d-flex flex-column justify-content-center align-items-center">
        <p className="text-dark fs-6 mt-4">you can start shoping from  <Link to="/Shop"> here</Link></p>
        <img src={img} alt=""  className="w-50"/>
       </div>) :  list.map((product) => {
        return (
          <div className="container">
            <div className="row justify-content-center align-items-center ">
              <div className="col-md-9">
                <table className="table table-dark table-striped mt-5 py-3   ">
                  <thead className="text-dark">
                    {/* <th scope="col">product image</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th> */}
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row  "></th>
                      <td>
                        <div className="img_wrapper">
                          <img src={product.image} alt="" className="" />
                        </div>
                      </td>
                      <td className="fw-bold fs-5 ">{product.title}</td>
                      <td className="fw-bold fs-5">{product.price}</td>
                      <td className="fw-bold fs-5">
                        {Math.round(product.price * product.quantity)}
                      </td>
                      <td>
                        <div className="Quanttity d-flex align-items-center ">
                          <button
                            class="rounded-circle   btn btn-outline-danger fs-5 "
                            onClick={() => {
                              increase(product);
                            }}
                          >
                            +
                          </button>
                          <span className="fs-6 fw-bold mx-2">
                            {product.quantity}
                          </span>
                          <button
                            className=" rounded-circle  btn btn-outline-danger fs-5"
                            onClick={() => {
                              decrease(product);
                            }}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="">
                        <button
                          type="button"
                          className="btn btn-danger "
                          onClick={() => {
                            remove(product);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                total is {total}
              </div>
            </div>
          </div>
        );
      })} 
    
    </div>
  );
}
