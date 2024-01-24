import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import MainLinksComponent from "./MainLinksComponent";
import ArtistContainerComponent from "./ArtistContainerComponent";
import { artistHeaders, artistURL, searchHeaders, searchURL } from "../config";
import axios from "axios";
import ArtistTracksComponent from "./ArtistTracksComponent";
import ErrorDefaultSongsComponent from "./ErrorDefaultSongsComponent";
import LoaderSearchSongsComponent from "./LoaderSearchSongsComponent";
import SearchResultsComponent from "./SearchResultsComponent";
import LoadingArtistComponent from "./LoadingArtistComponent";
import { clearSearchList } from "../actions/searchSongsActions";

export default function ArtistPageComponent() {
  const dispatch = useDispatch();

  const { artistId } = useParams();

  const [artistData, setArtistData] = useState({});
  const [loadingArtist, setLoadingArtist] = useState(false);
  const [errorArtistMsg, setErrorArtistMsg] = useState("");

  const [artistTracklist, setArtistTracklist] = useState([]);
  const [loadingTracklist, setLoadingTracklist] = useState(false);
  const [errorTracklist, setErrorTracklist] = useState("");

  const searchList = useSelector((state) => state.searchSongs.songsList);
  const loadingSearch = useSelector((state) => state.searchSongs.loading);
  const errorSearch = useSelector((state) => state.searchSongs.errorMsg);

  useEffect(() => {
    dispatch(clearSearchList())
    getArtistData(artistId);
  }, [artistId]);


  useEffect(() => {
    getArtistSong(artistData.name)
  }, [artistData]);

  const getArtistSong = (artist) => {
    setLoadingTracklist(true);
    setErrorTracklist("");
    axios(searchURL + artist, {
      headers: searchHeaders,
    }).then((res) => {
      if (res.status === 200) {
        setArtistTracklist(res.data.data);
        setLoadingTracklist(false);
      } else {
        setErrorTracklist(res.request.status);
        setLoadingTracklist(false);
      }
    }).catch((err) => {
      setErrorTracklist(err.message);
      setLoadingTracklist(false);
    })
  };

  const getArtistData = (id) => {
    setLoadingArtist(true);
    setErrorArtistMsg("");
    axios(artistURL + id, {
      headers: artistHeaders,
    })
      .then((res) => {
        if (res.status === 200) {
          setArtistData(res.data);
          setLoadingArtist(false);
        } else {
          setErrorArtistMsg(res.request.status);
          setLoadingArtist(false);
        }
      })
      .catch((err) => {
        setErrorArtistMsg(err.message);
        setLoadingArtist(false);
      });
  };

  return (
    <Row>
      <NavbarComponent />
      <Col xs={12} lg={{ span: 9, offset: 3 }} className="mainPage">
        <MainLinksComponent />
        {searchList.length !== 0 && !loadingSearch &&  <SearchResultsComponent list={searchList} /> }
        {loadingSearch && <LoaderSearchSongsComponent />} 
        {errorSearch && <ErrorDefaultSongsComponent errorMsg={errorSearch} />} 
        {loadingArtist  && <LoadingArtistComponent />}
        {loadingTracklist && <p>loadingTracklist...</p>}
        {(Object.keys(artistData).length > 0  && artistTracklist.length > 0) && <ArtistContainerComponent artistData={artistData} tracks={artistTracklist}/>} 
        {(errorArtistMsg || errorTracklist) && <ErrorDefaultSongsComponent errorMsg={errorArtistMsg + errorTracklist} />}    
      
      </Col>
    </Row>
  );
}
