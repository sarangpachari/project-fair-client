import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import landingImg from "../assets/home-1.svg";
import ProjectCard from "../components/ProjectCard";
import { Card } from "react-bootstrap";
import { homeProjectsAPI } from "../services/allAPI";

const Home = () => {
  const navigate = useNavigate()
  const [homeProjects, setHomeProjects] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  console.log(homeProjects);

  useEffect(() => {
    getHomeProjects();
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const getHomeProjects = async () => {
    try {
      const result = await homeProjectsAPI();
      console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigateToProject = ()=>{
    //USER IS LOGINED ?
    if (sessionStorage.getItem("token")) {
      //AUTHORISED USER
      navigate('/projects')
    } else {
      //NON-AUTHORIZED USER
      alert("Please login to view more projects.")
      navigate('/login')
    }
  }

  return (
    <>
      {/* LANDING */}
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center rounded shadow w-100"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "60px" }}>
                {" "}
                <i className="fa-brands fa-docker"></i> Project Fair
              </h1>
              <p style={{ textAlign: "justify" }}>
                One Stop Destination for all Software Development Projects.
                Where User can add and manage their projects. As well as access
                all projects available in our website... What are you waiting
                for!!!
              </p>
              {isLogin ? (
                <Link to={"/dashboard"} className="btn btn-warning">
                  MANAGE YOUR PROJECTS
                </Link>
              ) : (
                <Link to={"/login"} className="btn btn-warning">
                  STARTS TO EXPLORE
                </Link>
              )}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img className="img-fluid" src={landingImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* EXPLORE OUR PROJECTS */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {homeProjects?.map((project,index) => (
              <div key={index} className="me-5">
                <ProjectCard displayData={project} />
              </div>
            ))}
          </div>
        </marquee>
        
          <button onClick={handleNavigateToProject} className="btn btn-primary mt-5">
            Click here to View More Projects
          </button>
        
      </div>

      {/* OUR TESTIMONIALS */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1 className="mb-3">Our Testimonials</h1>
        <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-3 w-100">
          {/* CARD */}
          <Card style={{ width: "18rem", marginTop: "12px" }}>
            <Card.Body>
              <Card.Text className="d-flex justify-content-center align-items-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
                  alt=""
                />
                <div className="d-flex justify-content-center my-4">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: "justify" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* CARD */}
          <Card style={{ width: "18rem", marginTop: "12px" }}>
            <Card.Body>
              <Card.Text className="d-flex justify-content-center align-items-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                  alt=""
                />
                <div className="d-flex justify-content-center my-4">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: "justify" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* CARD */}
          <Card style={{ width: "18rem", marginTop: "12px" }}>
            <Card.Body>
              <Card.Text className="d-flex justify-content-center align-items-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png"
                  alt=""
                />
                <div className="d-flex justify-content-center my-4">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: "justify" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
