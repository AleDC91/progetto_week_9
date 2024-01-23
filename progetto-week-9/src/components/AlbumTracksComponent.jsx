import React from "react";
import { Row, Col } from "react-bootstrap";

export default function AlbumTracksComponent({ albumData }) {
  return (
    <Col md={8} className="p-5">
      <Row>
        <Col md={10} className="mb-5" id="trackList">
          {albumData.tracks.data.map((track) => {
            return (
              <div className="py-3 trackHover d-flex justify-content-between">
                <div className="card-title trackHover px-3 text-white">
                  {track.title}
                </div>
                <small className="duration text-white align-middle">
                  {Math.floor(parseInt(track.duration) / 60)}:
                  {parseInt(track.duration) % 60 < 10
                    ? "0" + (parseInt(track.duration) % 60)
                    : parseInt(track.duration) % 60}
                </small>
              </div>
            );
          })}
        </Col>
      </Row>
    </Col>
  );
}
