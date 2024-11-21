import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ height: "350px", paddingTop:'50px' }} className="my-5 container w-100">
        <div className="d-flex flex-wrap justify-content-between">
          {/* INTRO */}
          <div className=" my-3" style={{ width: "400px" }}>
            <h5>
              <i className="fa-solid fa-music me-2"></i>Project Fair
            </h5>
            <p>
              Designed and built with all the love in the world by the Media
              team with the help of our contributors.
            </p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
          {/* LINKS */}
          <div className="d-flex flex-column my-3">
            <h5>Links</h5>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Home Page
            </Link>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Login Page
            </Link>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Register Page
            </Link>
          </div>
          {/* GUIDES */}
          <div className="d-flex flex-column my-3">
            <h5>Guides</h5>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://react.dev/"
              target="_blank"
            >
              React
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://reactrouter.com/en/main"
              target="_blank"
            >
              React Router DOM
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              React Bootstrap
            </a>
          </div>
          {/* CONTACT */}
          <div className="d-flex flex-column my-3">
            <h5>Contact</h5>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Enter your Email here !!!"
                className="form-control me-2"
              />
              <button className="btn btn-info">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a
                href="https://x.com/?lang=en"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://wa.me/"
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-3">
          Copyright &copy; Project Fair : Build With React
        </p>
      </div>
    </>
  );
};

export default Footer;
