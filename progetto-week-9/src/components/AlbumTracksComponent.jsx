import React from "react";
import { Row, Col } from "react-bootstrap";
import TrackAlbumComponent from "./TrackAlbumComponent";

export default function AlbumTracksComponent({ albumData }) {
  return (
    <Col md={8} className="p-5">
      <Row>
        <Col md={10} className="mb-5" id="trackList">
          {albumData.tracks.data.map((track) => <TrackAlbumComponent track={track}/>)}
        </Col>
      </Row>
    </Col>
  );
}
