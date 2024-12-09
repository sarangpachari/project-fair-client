import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { FaGithub, FaLink } from "react-icons/fa";
import SERVER_BASE_URL from "../services/serverUrl";

const ProjectCard = ({displayData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className="btn shadow">
        <Card.Img
          height={"200px"}
          variant="top"
          src={`${SERVER_BASE_URL}/uploads/${displayData?.projectImage}`}
        />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>

      {/* MODAL */}
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PROJECT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row m-4">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={`${SERVER_BASE_URL}/uploads/${displayData?.projectImage}`}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h3 className="">{displayData?.title}</h3>
              <h6 className="mt-3">
                Languages Used : <span className="text-danger">{displayData?.languages}</span>
              </h6>
              <p className="mt-4" style={{ textAlign: "justify" }}>
               
                <span className="fw-bolder">Project Overview : </span>{displayData?.overview}
              </p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href={displayData?.github} target="_blank" className="btn btn-secondary"><FaGithub style={{fontSize:'22px'}}/></a>
            <a href={displayData?.website} target="_blank" className="btn btn-secondary"><FaLink style={{fontSize:'22px'}}/></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
