import React from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import Home from './Home';

function Header() {
  return (
    <div>
       
       <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="ms-auto">
      <Nav.Link href="./Home"><Link to="/" className="text-decoration-none text-white fs-5">Home</Link></Nav.Link>
       
      </Nav>
       </Navbar>
     
       <Routes>
       
        <Route path="/" element={ <Home />} />
       
       
        
       </Routes>
    </div>
  )
}

export default Header;