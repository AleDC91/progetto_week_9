import React from 'react'
import NavbarComponent from "./NavbarComponent"
import {Row, Col} from "react-bootstrap"
import  MainLinksComponent from "./MainLinksComponent"
import AlbumContainerComponent from "./AlbumContainerComponent"

export default function AlbumPageComponent() {
  return (
    <Row>
      <NavbarComponent />
      <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
        <MainLinksComponent />
        <AlbumContainerComponent />
      </Col>
    </Row>
  )
}
