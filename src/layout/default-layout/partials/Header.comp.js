import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../../../assets/img/logo.PNG'
import '../partials/Header.css'

import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'
export const Header = () => {
  const history =useHistory()
  const logMeOut=()=>{
    sessionStorage.removeItem("accessJWT")
    history.push("/")

    
  }
  
  return (
    <Navbar collapseOnSelect bg="info" varaint="dark" expand="md">
        <Navbar.Brand> 
            <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className='ml-auto' >
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="tickets">Tickets</Nav.Link>
            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
              
                
            </Nav>
           
            </Navbar.Collapse>
     
    </Navbar>
  )
}
