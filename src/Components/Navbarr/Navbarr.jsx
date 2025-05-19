import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import './Navbarr.css';




const Navbarr = () => {
 
const[favItem,setFavItem]=useState([])
const[cartItem,setCartItem]=useState([])

   useEffect(()=>{
 const getFav=JSON.parse(localStorage.getItem("favItems")) ||[]
   const getCart=JSON.parse(localStorage.getItem("cartItems")) ||[]
   setFavItem(getFav)
   setCartItem(getCart)

   },[])

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-name">
          🍽️ Nandu's<span>Kitchen</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
             <Link to="/" className="nav-link custom-link">Home</Link>
            <Link to="/receipes" className="nav-link custom-link">Recipes</Link>
            <Link to="/fav" className="nav-link custom-icon"><MdFavoriteBorder /> <Badge bg="secondary">{favItem.length}</Badge>
</Link>
            <Link to="/cart" className="nav-link custom-icon" ><IoCartOutline /> <Badge bg="secondary">{cartItem.length}</Badge>
</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
