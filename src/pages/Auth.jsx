import React, { useState } from "react";
import authImage from "../assets/authimage.png";
import { FloatingLabel, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/allAPI";

const Auth = ({ insideRegister }) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(userInput);

  const register = async (e) => {
    e.preventDefault();
    if (userInput.username && userInput.password && userInput.email) {
      //API CALL
      try {
        const result = await registerAPI(userInput);
        if (result.status == 200) {
          alert(
            `Welcome ${result.data?.username}, Please login to Explore our Projects.`
          );
          navigate("/login");
          setUserInput({ username: "", email: "", password: "" });
        } else {
          if (result.response.status == 406) {
            alert(result.response.data);
            setUserInput({ username: "", email: "", password: "" });
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill all fields");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    if (userInput.password && userInput.email) {
      //API CALL
      try {
        setIsLogin(true)
        const result = await loginAPI(userInput);
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          setIsLogin(true);
          setTimeout(() => {
            navigate("/");
            setUserInput({ username: "", email: "", password: "" });
            setIsLogin(false);
          }, 2000);
        } else {
          if (result.response.status == 404) {
            setIsLogin(false)
            alert(result.response.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill all fields");
    }
  };

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
                    <Form.Control
                      value={userInput.username}
                      onChange={(e) =>
                        setUserInput({ ...userInput, username: e.target.value })
                      }
                      type="text"
                      placeholder="Username"
                    />
                  </FloatingLabel>
                )}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    value={userInput.email}
                    onChange={(e) =>
                      setUserInput({ ...userInput, email: e.target.value })
                    }
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    value={userInput.password}
                    onChange={(e) =>
                      setUserInput({ ...userInput, password: e.target.value })
                    }
                    type="password"
                    placeholder="Password"
                  />
                </FloatingLabel>
                {insideRegister ? (
                  <div className="mt-3">
                    <button
                      onClick={(e) => register(e)}
                      className="btn btn-outline-primary mb-3"
                    >
                      Register
                    </button>
                    <p>
                      Already have an Account ?{" "}
                      <Link to={"/login"}>Login here</Link>
                    </p>
                  </div>
                ) : (
                  <div className="mt-3">
                    <button
                      onClick={(e) => login(e)}
                      className="btn btn-primary mb-3 d-flex align-items-center"
                    >
                      {isLogin ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        "Login"
                      )}
                    </button>
                    <p>
                      Don't have an Account ?{" "}
                      <Link to={"/register"}>Create here</Link>
                    </p>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
