import React from "react";
import authImage from "../assets/authimage.png";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Auth = ({ insideRegister }) => {
  return (
    <div
      style={{ minHeight: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={authImage} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className="my-3">
                <i className="fa-brands fa-docker"></i> Project Fair
              </h1>
              <h5 className="">
                {insideRegister ? "Create an Account" : "Login to your Account"}
              </h5>
              <Form className="w-75 my-4">
                {insideRegister && (
                  <FloatingLabel
                    controlId="floatingUser"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Username" />
                  </FloatingLabel>
                )}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister?
                  <div className="mt-3">
                    <button className="btn btn-outline-primary mb-3">Register</button>
                    <p>Already have an Account ? <Link to={'/login'}>Login here</Link></p>
                  </div>
                  :
<div className="mt-3">
                    <button className="btn btn-outline-primary mb-3">Login</button>
                    <p>Don't have an Account ? <Link to={'/register'}>Create here</Link></p>
                  </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
