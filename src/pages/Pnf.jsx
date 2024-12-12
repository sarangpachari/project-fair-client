import React from "react";
import pngImg from "../assets/pageNotFound.gif";
import { Link } from "react-router-dom";

const Pnf = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column align-items-center rounded shadow w-100"
    >
      <img className="img-fluid" src={pngImg} alt="" />
      <h3 className="text-danger">Look like you're lost !</h3>
      <h6 className="mt-2">The page you're looking out is not available</h6>
      <Link style={{textDecoration:'none'}} className="btn btn-outline-success mt-4" to={'/'}>Go to Home</Link>
    </div>
  );
};

export default Pnf;
