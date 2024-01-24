import React from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../actions/myLibraryAction";
import { Button } from "react-bootstrap";
import { setSong } from "../actions/activeSongActions";

export default function MyLibraryListComponent({ track }) {
  const favouriteTracks = useSelector((state) => state.myLibrary);
  const dispatch = useDispatch();
  console.log(favouriteTracks);

  const checkIsFavourite = (track) => {
    return favouriteTracks.some((item) => item.id === track.id);
  };

  const isTrackFavourite = checkIsFavourite(track);

  return (
    <div className="d-flex align-items-center justify-content-start">
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
      <div className="py-3  pe-3 trackHover d-flex justify-content-between w-100 " 
      onClick={() => dispatch(setSong(track))}>
        <div className="card-title trackHover px-3 text-white">
          {track.title}
        </div>
        <small className="duration text-white">
          {Math.floor(parseInt(track.duration) / 60)}:
          {parseInt(track.duration) % 60 < 10
            ? "0" + (parseInt(track.duration) % 60)
            : parseInt(track.duration) % 60}
        </small>
      </div>
    </div>
  );
}
