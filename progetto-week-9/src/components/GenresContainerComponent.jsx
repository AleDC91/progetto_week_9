import React from "react";
import GenreSectionComponent from "./GenreSectionComponent";
import { useSelector } from "react-redux";

export default function GenresContainerComponent() {
  const { rock, pop, hipHop } = useSelector(
    (state) => state.defaultSongs.songsLists
  );


  return (
    <>
      <GenreSectionComponent
        genre="Rock Classics"
        id="rock"
        list={rock}
    
      />
      <GenreSectionComponent
        genre="Pop Culture"
        id="pop"
        list={pop}

      />
      <GenreSectionComponent
        genre="#HipHop"
        id="hiphop"
        list={hipHop}

      />
    </>
  );
}
