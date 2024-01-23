import React from 'react';
import LoaderDefaultSongsComponent from "./LoaderDefaultSongsComponent"
import { useSelector } from "react-redux";
export default function LoaderDefaultContainerComponent() {

    const loading = useSelector(state => state.defaultSongs.loading)
  return (<>
    <LoaderDefaultSongsComponent />
    <LoaderDefaultSongsComponent />
    <LoaderDefaultSongsComponent />
    </>
  )
}
