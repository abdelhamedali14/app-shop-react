import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { deleteFromCart } from "../../store/cartSlice";
export default function AddToCart() {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.cartStore.cartList);
  const count = useSelector((store) => store.cartStore.cartCount);
  console.log(list);
  console.log(count);
  const remove = (product) => {
    dispatch(deleteFromCart(product));
    console.log("ans");
  };
  return (
    <div>
      {list.map((product) => {
        return (
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-md-9">
                <table className="table table-dark table-striped ">
                  <thead className="text-dark">
                    <th scope="col">product image</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>
                        <div className="img_wrapper">
                          <img src={product.image} alt="" className="w-25" />
                        </div>
                      </td>
                      <td className="fw-bold fs-5">{product.price}</td>
                      <td>
                        <div className="Quanttity d-flex align-items-center ">
                          <button class="rounded-circle   btn btn-outline-danger fs-5 ">
                            +
                          </button>
                          <span className="fs-6 fw-bold mx-2"></span>
                          <button className=" rounded-circle  btn btn-outline-danger fs-5">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// <div class="cart_box container mt-5">
//   <div class="head_wrapper text-center ">
//     <h2 class="text-info fs-1 py-2">shopping cart</h2>
//   </div>
//   <table class="table table-light table-striped ">
//     <thead class="fs-6 fw-bold">
//       <tr>
//         <th scope="col">item number</th>
//         <th scope="col">product image</th>
//         <th scope="col">price</th>
//         <th scope="col">Total</th>
//         <th scope="col" class="mx-2">
//           Quantity
//         </th>
//         <th scope="col">delete</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row"></th>
//         <td>
//           <div class="img_wrapper">
//             <img alt="" class="img-cart" />
//           </div>
//         </td>
//         <td class="fw-bold fs-5"> LE</td>
//         <td class="fw-bold fs-5">LE</td>
//         <td>
//           <div class="Quanttity d-flex align-items-center ">
//             <button class="rounded-circle fw-bold  btn btn-outline-danger fs-5 "></button>
//             <span class="fs-6 fw-bold mx-2"></span>
//             <button class="rounded-circle fw-bold   btn btn-outline-danger fs-5"></button>
//           </div>
//         </td>
//         <td class="">
//           <button type="button" class="btn btn-danger ">
//             <span class="badge text-bg-secondary ms-4"></span>
//           </button>
//         </td>
//       </tr>
//       <th>
//         <div class="d-flex  mt-5 align-items-center">
//           <p class="fw-bold fs-4">total is :</p>
//           <button class="btn btn-primary mx-3">order now</button>
//         </div>
//       </th>
//     </tbody>
//   </table>
// </div>;
