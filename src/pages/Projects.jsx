import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { allProjectsAPI } from "../services/allAPI";

const Projects = () => {
  const [searchKey,setSearchKey]=useState("")
  const [allProjects, setAllProjects] = useState([]);
  console.log(allProjects);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  
  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await allProjectsAPI(reqHeader,searchKey);
        // console.log(result);
        if (result.status == 200) {
          setAllProjects(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="container-fluid">
        <div className="p-4">
          <div className="d-flex my-4 justify-content-between align-items-center">
            <h1>All Projects</h1>
            <input
            onChange={e=>setSearchKey(e.target.value)}
              type="text"
              className="form-control w-25"
              placeholder="Search by Languages"
            />
          </div>
          <Row>
            {
              allProjects.length>0?
              allProjects.map((project)=>(
                <Col key={project?._id} className="mb-3" sm={12} md={6} lg={3}>
              <ProjectCard displayData={project} />
            </Col>
              ))
              :
              <div className="fw-bolder text-danger">Project Not Found !</div>
            }
          </Row>
        </div>
      </div>
    </>
  );
};

export default Projects;
