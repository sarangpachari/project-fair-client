import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { IoIosArrowDown, IoMdArrowDropdownCircle } from "react-icons/io";
import uploadImgIcon from "../assets/uploadImgIcon.png";

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center">
        <h3 className="text-warning mt-3">Profile</h3>
        <button
          className="border-0 bg-white d-flex align-items-center"
          onClick={() => setOpen(!open)}
        >
          <IoMdArrowDropdownCircle style={{ fontSize: "30px" }} />
        </button>
      </div>
      <Collapse in={open}>
        <div
          className="row container-fluid align-items-center justify-content-center shadow py-5 rounded"
          id="example-collapse-text"
        >
          {/* UPLOAD PIC */}
          <label className="text-center mb-4">
            <input style={{display:'none'}} type="file" />
            <img
              src={uploadImgIcon}
              style={{ width: "200px" }}
              className="img-fluid"
              alt=""
            />
          </label>
          <div className="mb-2 w-100">
            <input
              type="text"
              placeholder="User Github Link"
              className="form-control"
            />
          </div>
          <div className="mb-2 w-100">
            <input
              type="text"
              placeholder="User Linkedin Link"
              className="form-control"
            />
          </div>
          <div className="d-grid w-100">
            <button className="btn btn-warning">Update</button>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Profile;
