import notFound from "../../../assets/404 Error Page not Found with people connecting a plug-amico.svg";
import "./notFound.css"
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
        <img src={notFound} alt=""  className=" notFound-img"/>
        <p className="fs-6 fw-bold">start your shopping from  <Link to="/Home" className="text-decoration-none btn btn-info">here</Link></p>
      </div>
    </div>
  );
}
