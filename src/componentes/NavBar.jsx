import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Nav className="navbar navbar-dark bg-warning">
          <div className="container">
            <Navbar.Brand to="/">Mundo BMW</Navbar.Brand>

            <Link to="/" className="btn btn-outline-primary">
              Home
            </Link>
            <Link to="/category/articulos" className="btn btn-outline-primary">
              Motores
            </Link>
            <Link to="/category/bolsos" className="btn btn-outline-primary">
              Transmisiones
            </Link>
            <Link to="/category/lociones" className="btn btn-outline-primary">
              Turbos
            </Link>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default NavBar;
