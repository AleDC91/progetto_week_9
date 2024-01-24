import React from 'react'
import { Col, Placeholder, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoadingArtistTracklistComponent() {
  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }} md={10} /* lg={10} */>
        <div className="mt-4 d-flex justify-content-start">
          <h2 className="w-25 h-100"><Placeholder className="w-100 placeholder-fade h-100" /></h2>
        </div>
        <div className="pt-5 mb-5">
          <Row id="apiloaded">
            {[1,2,3,4,5,6].map((track) => {
              return <Col sm="auto" className="text-center mb-5">
                <div className="">
                    <Placeholder className="w-100 h-100 placeholder-fade" style={{minWidth: "200px", aspectRatio: "1"}}/>              
                </div>
                <p className="mb-0">
                  <Link>
                  <Placeholder className="w-75 placeholder-fade" />
                  </Link>
                </p>
               
                <p>
                  <Link>
                  <Placeholder className="w-75 placeholder-fade" />
                  </Link>
                </p>

              </Col>;
            })}
          </Row>
        </div>
      </Col>
    </Row>
  )
}
