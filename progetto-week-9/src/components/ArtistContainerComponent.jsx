import React from "react";
import ArtistHeaderComponent from "./ArtistHeaderComponent";
import ArtistTracksComponent from "./ArtistTracksComponent";

export default function ArtistContainerComponent({ artistData, tracks }) {
  return (
    <>
      <ArtistHeaderComponent artistData={artistData} />
      <ArtistTracksComponent tracks={tracks}/>
    </>
  );
}
