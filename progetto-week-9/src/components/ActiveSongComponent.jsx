import React from "react";
import { Button } from "react-bootstrap";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../actions/myLibraryAction";

export default function ActiveSongComponent({ song }) {

    const favouriteTracks = useSelector((state) => state.myLibrary);
    const dispatch = useDispatch();
    console.log(favouriteTracks);
  
    const checkIsFavourite = (song) => {
      return favouriteTracks.some((item) => item.id === song.id);
    };
  
    const isTrackFavourite = checkIsFavourite(song);

  return (
    <div className="song-info-container d-flex w-100 align-items-center">
      <div className="album-info-player me-2">
        <img
          src={song.album.cover_small || song.album.cover}
          alt={song.album.title}
        />
      </div>
      <div className="song-info text-white">
        <div>
          <p className="m-0 p-0">{song.title.length < 16 ? song.title : song.title.substring(0,16) + "..."}</p>
          <p className="m-0 p-0">{song.artist.name.length <  16 ? song.artist.name : song.artist.name.substring(0,16) + "..."}</p>
        </div>
        <Button
          className="bg-transparent border-0 fs-3 text-danger"
          onClick={() => {
            if (isTrackFavourite) {
              dispatch(removeFavourite(song));
            } else {
              dispatch(addFavourite(song));
            }
          }}
        >
          {isTrackFavourite ? <IoMdHeart /> : <IoIosHeartEmpty />}
        </Button>
      </div>
    </div>
  );
}
