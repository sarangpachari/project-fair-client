import React, { useContext, useEffect, useState } from "react";
import Add from "./Add";
import Edit from "./Edit";
import { FaGithub, FaTrash } from "react-icons/fa";
import { deleteProjectAPI, userProjectsAPI } from "../services/allAPI";
import {
  addProjectContext,
  editProjectContext,
} from "../contexts/ContextShare";

const View = () => {
  const { addProjectResponse, setAddProjectResponse } =
    useContext(addProjectContext);
  const { editProjectResponse, setEditProjectResponse } =
    useContext(editProjectContext);
  const [userProjects, setUserProjects] = useState([]);
  console.log(userProjects);

  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse, editProjectResponse]);

  //GET USER PROJECTS ALL INTO THE PAGE
  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await userProjectsAPI(reqHeader);
        console.log(result);
        if (result.status == 200) {
          setUserProjects(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //REMOVING PROJECT
  const removeProject = async (id) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await deleteProjectAPI(id, reqHeader);
        if (result.status == 200) {
          getUserProjects();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h4 className="text-danger">All Projects</h4>
        <div>
          <Add />{" "}
        </div>
      </div>
      <div className="mt-2">
        {/* PROJECT */}
        {userProjects.length > 0 ? (
          userProjects.map((project) => (
            <div
              key={project?._id}
              className="border rounded p-2 d-flex justify-content-between mb-3"
            >
              <h5>{project?.title}</h5>
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <Edit project={project} />
                </div>
                <button className="btn">
                  <a
                    href={project?.github}
                    target="_blank"
                    className="btn btn-secondary"
                  >
                    <FaGithub style={{ fontSize: "22px" }} />
                  </a>
                </button>
                <button onClick={()=>removeProject(project?._id)} className="btn">
                  <FaTrash style={{ fontSize: "22px", color: "red" }} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="fw-bolder fs-3">
            You haven't uploaded any project yet ! Please Add your Projects.
          </div>
        )}
      </div>
    </>
  );
};

export default View;
