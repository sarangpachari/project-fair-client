import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { IoIosLogOut } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { tokenContext } from '../contexts/TokenAuth'


const Header = ({insideDashboard}) => {
  const navigate = useNavigate()
  const {authorisedUser,setAuthorisedUser}=useContext(tokenContext)

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }
  return (
    <Navbar style={{zIndex:1}} className="bg-body-tertiary shadow rounded-pill position-fixed w-100">
        <Container>
          <Navbar.Brand>
           <Link style={{textDecoration:'none'}}> <i className='fa-brands fa-docker'></i> Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <button onClick={logout} className='btn btn-outline-danger rounded-pill fw-bolder d-flex gap-2 align-items-center'> <IoIosLogOut style={{fontSize:'22px'}} />Logout</button>
          }
        </Container>
      </Navbar>
  )
}

export default Header