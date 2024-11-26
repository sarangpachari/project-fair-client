import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { IoIosLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'


const Header = ({insideDashboard}) => {
  return (
    <Navbar style={{zIndex:1}} className="bg-body-tertiary shadow rounded-pill position-fixed w-100">
        <Container>
          <Navbar.Brand>
           <Link style={{textDecoration:'none'}}> <i className='fa-brands fa-docker'></i> Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <button className='btn btn-outline-danger rounded-pill fw-bolder d-flex gap-2 align-items-center'> <IoIosLogOut style={{fontSize:'22px'}} />Logout</button>
          }
        </Container>
      </Navbar>
  )
}

export default Header