import React from "react";
import { Row } from "react-bootstrap";
import AlbumTracksComponent from "./AlbumTracksComponent";
import AlbumCoverComponent from "./AlbumCoverComponent";

export default function AlbumContainerComponent({ albumData }) {
  return (
    <Row>
      <AlbumCoverComponent albumData={albumData} />
      <AlbumTracksComponent albumData={albumData} />
    </Row>
  );
}
