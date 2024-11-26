import React from "react";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="container-fluid">
        <div className="p-4">
          <div className="d-flex my-4 justify-content-between align-items-center">
            <h1>All Projects</h1>
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search by Languages"
            />
          </div>
          <Row>
            <Col className="mb-3" sm={12} md={6} lg={3}>
              <ProjectCard />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Projects;
