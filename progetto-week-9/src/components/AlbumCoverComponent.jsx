import React from 'react'
import { Col } from "react-bootstrap";


export default function AlbumCoverComponent({albumData}) {
  return (
    <Col md={3} className="pt-5 text-center" id="img-container">
    <img
      src={albumData.cover}
      alt={albumData.title}
      className="card-img img-fluid"
    />
    <div className="mt-4 text-center">
      <p className="album-title">{albumData.title}</p>
    </div>
    <div className="text-center">
      <p className="artist-name">{albumData.artist.name}</p>
    </div>
    <div class="mt-4 text-center">
      <button id="btnPlay" className="btn btn-success" type="button">
        Play
      </button>
    </div>
  </Col>
  )
}
