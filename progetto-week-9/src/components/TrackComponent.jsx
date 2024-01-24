import React from "react";
import { Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSong } from "../actions/activeSongActions";
import { addFavourite, removeFavourite } from "../actions/myLibraryAction";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

export default function TrackComponent({ track }) {
  const favouriteTracks = useSelector((state) => state.myLibrary);
  const dispatch = useDispatch();
  console.log(favouriteTracks);

  const checkIsFavourite = (track) => {
    return favouriteTracks.some((item) => item.id === track.id);
  };

  const isTrackFavourite = checkIsFavourite(track);

  return (
    <Col sm="auto" className="text-center mb-5">
      <Link to={`/album/${track.album.id}`}>
        <img src={track.album.cover_medium} alt={track.album.title} />
      </Link>
      <div className="d-flex align-items-center mt-2">
        <Button
          className="bg-transparent border-0 fs-3 text-danger"
          onClick={() => {
            if (isTrackFavourite) {
              dispatch(removeFavourite(track));
            } else {
              dispatch(addFavourite(track));
            }
          }}
        >
          {isTrackFavourite ? <IoMdHeart /> : <IoIosHeartEmpty />}
        </Button>
        <div>
          <p className="mb-0" onClick={() => dispatch(setSong(track))}>
            <Link>
              Track:{" "}
              {track.title.length < 16
                ? track.title
                : track.title.substring(0, 16) + "..."}
            </Link>
          </p>

          <p className="mb-0">
            <Link to={`/album/${track.album.id}`}>
              Album:{" "}
              {track.album.title.length < 16
                ? track.album.title
                : track.album.title.substring(0, 16) + "..."}
            </Link>
          </p>
        </div>
      </div>
    </Col>
  );
}
