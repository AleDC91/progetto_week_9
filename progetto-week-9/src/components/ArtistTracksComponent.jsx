import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ArtistTracksComponent({ tracks }) {
  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }} md={10} /* lg={10} */>
        <div className="mt-4 d-flex justify-content-start">
          <h2 className="text-white font-weight-bold">Tracks</h2>
        </div>
        <div className="pt-5 mb-5">
          <Row id="apiloaded">
            {tracks.map((track) => {
              return <Col sm="auto" className="text-center mb-5">
                <Link to={`/album/${track.album.id}`}>
                  <img src={track.album.cover_medium} alt={track.album.title} />
                </Link>
                <p>
                  <Link>
                    Track: {track.title.length < 16 ? track.title : track.title.substring(0, 16) + "..."}
                  </Link>
                </p>
                <br />
                <p>
                  <Link to={`/album/${track.album.id}`}>
                    Album: {track.album.title.length < 16 ? track.album.title : track.album.title.substring(0, 16) + "..."}
                  </Link>
                </p>

              </Col>;
            })}
          </Row>
        </div>
      </Col>
    </Row>
  );
}
