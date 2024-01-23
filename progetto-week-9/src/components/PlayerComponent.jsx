import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom"

export default function PlayerComponent() {
  return (


    <Container fluid className="fixed-bottom bg-container pt-1">
        <Row>
            <Col lg={{span:10, offset: 2}}>
                <Row>
                    <Col xs={{span: 8, offset:2}} md={{span: 4, offset: 4}} lg={{span: 4, offset: 4}} className="playerControls mt-1">
                    <Row>
                        <Col><Link to="#"> <img src="images/playerbuttons/Shuffle.png" alt="shuffle" /></Link></Col>
                        <Col><Link to="#"> <img src="images/playerbuttons/Previous.png" alt="previous" /></Link></Col>
                        <Col><Link to="#"> <img src="images/playerbuttons/Play.png" alt="play" /></Link></Col>
                        <Col><Link to="#"> <img src="images/playerbuttons/Next.png" alt="next" /></Link></Col>
                        <Col><Link to="#"> <img src="images/playerbuttons/Repeat.png" alt="repeat" /></Link></Col>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6} lg={{span: 8, offset: 2}}>
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
        </Row >
    </Container>


    // <div class="container-fluid fixed-bottom bg-container pt-1">
    //   <div class="row">
    //     <div class="col-lg-10 offset-lg-2">
    //       <div class="row">
    //         <div
    //           class="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
    //         >
    //           <div class="row">
    //             <a href="#">
    //               <img src="playerbuttons/Shuffle.png" alt="shuffle" />
    //             </a>
    //             <a href="#">
    //               <img src="playerbuttons/Previous.png" alt="shuffle" />
    //             </a>
    //             <a href="#">
    //               <img src="playerbuttons/Play.png" alt="shuffle" />
    //             </a>
    //             <a href="#">
    //               <img src="playerbuttons/Next.png" alt="shuffle" />
    //             </a>
    //             <a href="#">
    //               <img src="playerbuttons/Repeat.png" alt="shuffle" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="row justify-content-center playBar py-3">
    //         <div class="col-8 col-md-6">
    //           <div class="progress">
    //             <div
    //               class="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="0"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
