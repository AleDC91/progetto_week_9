import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ActiveSongComponent from "./ActiveSongComponent";

export default function PlayerComponent() {
  const song = useSelector((state) => state.activeSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      {Object.keys(song).length > 0 && <ActiveSongComponent song={song} />}

      <Row>
        <Col lg={{ span: 10, offset: 2 }}>
          <Row>
            <Col
              xs={{ span: 8, offset: 2 }}
              md={{ span: 4, offset: 4 }}
              lg={{ span: 4, offset: 4 }}
              className="playerControls mt-1"
            >
              <Row>
                <Col>
                  <Link to="#" className="controller-remove">
                    <img src={`/images/playerbuttons/Shuffle.png`} alt="shuffle" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#" className="controller-remove">
                    <img
                      src={`/images/playerbuttons/Previous.png`}
                      alt="previous"
                    />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <img src={`/images/playerbuttons/Play.png`} alt="play" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#" className="controller-remove">
                    <img src={`/images/playerbuttons/Next.png`} alt="next" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#" className="controller-remove">
                    <img src={`/images/playerbuttons/Repeat.png`} alt="repeat" />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center playBar py-3">
        <Col xs={8} md={6} lg={{ span: 6, offset: 2 }}>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
