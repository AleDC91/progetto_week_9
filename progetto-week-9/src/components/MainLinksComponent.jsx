import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { MdOutlineMenu } from "react-icons/md";

export default function MainLinksComponent() {




  const sidebar = document.querySelector("#sidebar");

  const toggleSidebar = () => {
    if (sidebar.classList.contains("hide")){
      sidebar.classList.remove("hide");
      sidebar.classList.add("show");
    } else {
      sidebar.classList.add("hide");
      sidebar.classList.remove("show");
  }}

  return (
    <Row>
      
      <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
        <Link to="#" className="text-decoration-none">
          TRENDING
        </Link>
        <Link to="#" className="text-decoration-none">
          PODCAST
        </Link>
        <Link to="#" className="text-decoration-none">
          MOODS AND GENRES
        </Link>
        <Link to="#" className="text-decoration-none">
          NEW RELEASES
        </Link>
        <Link to="#" className="text-decoration-none">
          DISCOVER
        </Link>
      </Col>
      <div className="display-menu-btn">
        <Button className="bg-transparent border-0" onClick={toggleSidebar}>
          <MdOutlineMenu className="fs-1" />
        </Button>
      </div>
    </Row>
  );
}
