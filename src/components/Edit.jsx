import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import projectImgUpload from '../assets/projectImgUpload.png'
import { FaEdit } from 'react-icons/fa';

const Edit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <button onClick={handleShow} className='btn'><FaEdit style={{fontSize:'22px'}}/></button>
     <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center p-3">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} />
                <img src={projectImgUpload} className='img-fluid' style={{width:'150px'}} alt="" />
              </label>
              <div className="text-danger">
                *Upload only the following file types (jpeg, jpg, png) here.
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Languages' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Overview' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Github Link' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Website Link' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit