import React from 'react'
import {Row, Col, Placeholder} from "react-bootstrap" 

export default function LoaderDefaultSongsComponent() {
  const list = [1,2,3,4]
  
  return (
    <Row>
      <Col xs={10}>
        <div  style={{marginTop: "50px"}}>
          <h2> <Placeholder className="w-50 placeholder-fade"/></h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {list && list.map((song, index) => {
              return (
                <Col className="text-center" key={index}>
                  <Placeholder className="w-100 placeholder-fade" style={{aspectRatio: "1"}}  />
                  <p>
                    <Placeholder className="w-75 placeholder-fade"/>
                    <br />
                    <Placeholder className="w-75 placeholder-fade"/>
                  </p>
                </Col>
              )
            })}
          </Row>
        </div>
      </Col>
    </Row>
  )
}
