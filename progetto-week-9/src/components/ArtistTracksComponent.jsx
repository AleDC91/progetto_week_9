import React from "react";
import { Col, Row } from "react-bootstrap";
import TrackComponent from "./TrackComponent";

export default function ArtistTracksComponent({ tracks }) {
  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }} md={10} /* lg={10} */>
        <div className="mt-4 d-flex justify-content-start">
          <h2 className="text-white font-weight-bold">Tracks</h2>
        </div>
        <div className="pt-5 mb-5">
          <Row id="apiloaded">
            {tracks.map((track, index) => <TrackComponent key={index} track={track} />)}
          </Row>
        </div>
      </Col>
    </Row>
  );
}
