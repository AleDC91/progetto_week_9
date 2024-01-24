import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export default function ArtistHeaderComponent({ artistData }) {
  return (
    <Row>
      <Col xs={12} md={10} /*lg={10}*/ className="mt-5">
        <h2 className="titleMain">{artistData.name}</h2>
        <div id="followers">{artistData.nb_fan + " followers"}</div>
        <div className="d-flex justify-content-center" id="button-container">
          <Button
            className="btn btn-success me-2 mainButton"
            id="playButton"
          >
            PLAY
          </Button>
          <Button
          variant="light-outlined"
            className="mainButton text-white"
            id="followButton"
          >
            FOLLOW
          </Button>
        </div>
      </Col>
    </Row>
  );
}
