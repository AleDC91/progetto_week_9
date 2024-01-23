import React from 'react'

import {Row, Col, Placeholder} from "react-bootstrap" 



export default function LoadingAlbumPageComponent() {
  return (
        <Row>
      <Col md={3} className="pt-5 text-center" id="img-container">
        <Placeholder className="w-75  placeholder-fade" style={{aspectRatio: "1"}}/>
        <div className="mt-4 text-center">
          <p className="album-title"><Placeholder className="w-75 placeholder-fade" /></p>
        </div>
        <div className="text-center">
          <p className="artist-name"><Placeholder className="w-75 placeholder-fade" /></p>
        </div>
        <div class="mt-4 text-center">
          <Placeholder id="btnPlay" className=" placeholder-fade" />
        </div>
      </Col>
      <Col md={8} className="p-5">
        <Row>
          <Col md={10} className="mb-5" id="trackList">
            {[1,2,3,4,5,6].map((track) => {
              return (
                <div className="py-3  d-flex justify-content-between">
                  <div className="card-title ps-3 text-white w-100 h-100">
                  <Placeholder className="w-100 h-100 placeholder-fade" />
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
