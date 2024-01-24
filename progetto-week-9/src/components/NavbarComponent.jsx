import React from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import NavBottomButtonsComponent from './NavBottomButtonsComponent'
import { useDispatch } from "react-redux";
import { clearSearchList } from "../actions/searchSongsActions";

export default function NavbarComponent() {

const dispatch = useDispatch()

  return (
    <Col xs={2} className="navbar-component ">
      <Navbar
        expand="lg"
        className=" bg-body-tertiary  navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="d-flex flex-column justify-content-between h-100">
          <div className="nav-container d-flex flex-column">
            <Navbar.Brand>
              <Link to="/">
                <img
                  src="images/Spotify_Logo.png"
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto pt-0 navbar d-flex">
                <Link to="/" className="nav-link" onClick={() => dispatch(clearSearchList())}>
                  <i className="fas fa-home fa-lg"></i>&nbsp; Home
                </Link>
                <Link to="/myLibrary" className="nav-link" onClick={() => dispatch(clearSearchList())}>
                  <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                </Link>
                <SearchComponent />
              </Nav>
            </Navbar.Collapse>
          </div>
          <NavBottomButtonsComponent />
        </Container>
      </Navbar>
    </Col>
  );
}
