import React from 'react'
import Add from './Add'
import Edit from './Edit'
import { FaGithub, FaTrash } from 'react-icons/fa'

const View = () => {
  return (
    <>
    <div className="d-flex justify-content-between mt-3">
      <h4 className='text-danger'>All Projects</h4>
      <div><Add /> </div>
    </div>
    <div className="mt-2">
      {/* PROJECT */}
      <div className="border rounded p-2 d-flex justify-content-between mb-3">
        <h5>Title</h5>
        <div className="d-flex justify-content-center align-items-center">
          <div><Edit /></div>
          <button className="btn"><a href="https://github.com/githubtraining/hellogitworld.git" target="_blank" className="btn btn-secondary"><FaGithub style={{fontSize:'22px'}}/></a></button>
          <button className="btn"><FaTrash style={{fontSize:'22px', color:'red'}}/></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default View