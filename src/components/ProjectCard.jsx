import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className="btn shadow">
        <Card.Img
          height={"200px"}
          variant="top"
          src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      {/* MODAL */}
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>
                Languages Used : <span className="text-danger">Language</span>
              </h6>
              <p style={{ textAlign: "justify" }}>
               
                <span className="fw-bolder">Project Overview : </span>Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa,
                est alias saepe incidunt nesciunt facilis nihil atque similique
                quaerat placeat repellendus sit omnis consectetur! Dolorum
                itaque earum quibusdam corporis!
              </p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="https://github.com/githubtraining/hellogitworld.git" target="_blank" className="btn btn-secondary"><FaGithub style={{fontSize:'22px'}}/></a>
            <a href="https://github.com/githubtraining/hellogitworld.git" target="_blank" className="btn btn-secondary"><FaLink style={{fontSize:'22px'}}/></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
