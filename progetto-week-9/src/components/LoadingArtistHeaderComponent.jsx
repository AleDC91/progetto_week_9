import React from "react";
import { Button, Col, Placeholder, Row } from "react-bootstrap";

export default function LoadingArtistHeaderComponent() {
  return (
    <Row>
      <Col xs={12} md={10} /*lg={10}*/ className="mt-5">
        <h2 className="titleMain">
          <Placeholder className="w-25 placeholder-fade" />
        </h2>
        <div id="followers">
          <Placeholder className="w-25 placeholder-fade" />
        </div>
        <div className="d-flex justify-content-center" id="button-container">
          <Button className=" me-2 mainButton placeholder-fade" id="playButton">
          </Button>
          <Button
            
            className=" mainButton placeholder-fade"
            id="followButton"
          >
          </Button>
        </div>
      </Col>
    </Row>
  );
}
