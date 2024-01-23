import React from "react";
import {Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function SearchResultsComponent({list}) {


  return (
    <Row>
      <Col xs={10}>
        <div id="searchResults">
          <h2>Search Results</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
          {list && list.map(song => {
              return (
                <Col className="text-center"id={song.id} >
                  <Link to={`/album/${song.album.id}`}>
                  <img className="img-fluid" src={song.album.cover_medium} alt={song.album.title} />
                  </Link>
                  <p>
                    <Link to={`/album/${song.album.id}`}>
                    Album: {song.album.title.length < 16 ? song.album.title : song.album.title.substring(0, 16) + "..."}
                    </Link>
                    <br />
                    <Link to={`/artist/${song.artist.name}`}>
                      Artist: {song.artist.name}
                    </Link>

                  </p>
                </Col>
              )
            })}
          </Row>
        </div>
      </Col>
    </Row>
  );
}
