import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { IoIosArrowDown, IoMdArrowDropdownCircle } from "react-icons/io";
import uploadImgIcon from "../assets/uploadImgIcon.png";
import SERVER_BASE_URL from "../services/serverUrl";
import { updateUserAPI } from "../services/allAPI";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [preview,setPreview] = useState("")
  const [existingProfilePic, setExistingProfilePic] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    github: "",
    linkedin: "",
    profilePic: "",
  });
  console.log(userDetails);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUserDetails({
        ...userDetails,
        username: user.username,
        email: user.email,
        password: user.password,
        github: user.github,
        linkedin: user.linkedin,
      });
      setExistingProfilePic(user.profilePic);
    }
  }, [open]);

  //GEERATE URL FOR THE UPLOAD PROFILE PIC
  useEffect(()=>{
    if (userDetails?.profilePic) {
      setPreview(URL.createObjectURL(userDetails?.profilePic))
    }else{
      setPreview("")
    }
  },[userDetails.profilePic])

  //FUNCTION TO UPDATE
  const handleUserUpdate = async ()=>{
    //GET ALL USER DETAILS
    const {username,email,password,github,linkedin,profilePic} = userDetails
    //IF TEXT FIELD HAS VALUE
    if (github && linkedin) {
      //REQ BODY
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingProfilePic)

      //REQ HEADER
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader ={
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        //MAKE API CALL
        try {
          const result = await updateUserAPI(reqBody,reqHeader)
          if (result.status==200) {
            alert("Profile Updated Successfully")
            sessionStorage.setItem("user",JSON.stringify(result.data))
            setOpen(!open)
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("Please fill all the fields !")
    }
  }

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
            <input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} style={{ display: "none" }} type="file" />
            {existingProfilePic == "" ? (
              <img
                src={preview?preview:uploadImgIcon}
                style={{ width: "200px" }}
                className="img-fluid"
                alt=""
              />
            ) : (
              <img
                src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingProfilePic}`}
                style={{ width: "200px" }}
                className="img-fluid"
                alt=""
              />
            )}
          </label>
          <div className="mb-2 w-100">
            <input
              value={userDetails?.github}
              onChange={(e) =>
                setUserDetails({ ...userDetails, github: e.target.value })
              }
              type="text"
              placeholder="User Github Link"
              className="form-control"
            />
          </div>
          <div className="mb-2 w-100">
            <input
              value={userDetails?.linkedin}
              onChange={(e) =>
                setUserDetails({ ...userDetails, linkedin: e.target.value })
              }
              type="text"
              placeholder="User Linkedin Link"
              className="form-control"
            />
          </div>
          <div className="d-grid w-100">
            <button onClick={handleUserUpdate} className="btn btn-warning">Update</button>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Profile;
