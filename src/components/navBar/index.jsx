import "./navBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Index(props) {
  const count = useSelector((store) => store.cartStore.cartCount);

  return (
    <div className="Wrapper shadow bg-white">
      <div className="navBar ">
        <h2 className="text-info">Shopping App</h2>
        <ul className="links d-flex align-items-center fs-5 fw-bold">
          <li>
            <Link to="/Home" className="text-decoration-none text-dark">
              home
            </Link>
          </li>
          <li>
            <Link to="/Shop" className="text-decoration-none text-dark">
              shop
            </Link>
          </li>
          <li>
            <Link to="/AddToCart" className="text-decoration-none text-dark">
              🛒 <span>{count}</span>
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="text-decoration-none text-dark btn btn-info">
              sign up 
            </Link>
          </li>
          <li>
            <Link to="/SignIn" className="text-decoration-none text-dark btn btn-info ">
              sign in 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
