import React from 'react'
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


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
    <Link to={`/artist/${albumData.artist.id}`} className="text-center text-decoration-none">
      <p className="artist-name">{albumData.artist.name}</p>
    </Link>
    <div class="mt-4 text-center">
      <button id="btnPlay" className="btn btn-success" type="button">
        Play
      </button>
    </div>
  </Col>
  )
}
