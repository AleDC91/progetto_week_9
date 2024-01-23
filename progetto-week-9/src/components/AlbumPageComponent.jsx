import React, { useState, useEffect } from "react";
import NavbarComponent from "./NavbarComponent";
import { Row, Col } from "react-bootstrap";
import MainLinksComponent from "./MainLinksComponent";
import AlbumContainerComponent from "./AlbumContainerComponent";
import { useParams } from "react-router-dom";
import { albumURL, albumHeaders } from "../config";
import axios from "axios";
import LoadingAlbumPageComponent from "./LoadingAlbumPageComponent";
import ErrorDefaultSongsComponent from "./ErrorDefaultSongsComponent";
import {useSelector, useDispatch} from "react-redux"
import SearchResultsComponent from "./SearchResultsComponent"
import LoaderSearchSongsComponent from "./LoaderSearchSongsComponent"
import {clearSearchList} from "../actions/searchSongsActions.js"


export default function AlbumPageComponent() {

  const dispatch = useDispatch()
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState({});
  const [loadingAlbum, setLoadingAlbum] = useState(false);
  const [errorAlbumMsg, setErrorAlbumMsg] = useState("");

  const searchList = useSelector((state) => state.searchSongs.songsList);
  const loadingSearch = useSelector((state) => state.searchSongs.loading);
  const errorSearch = useSelector((state) => state.searchSongs.errorMsg);



  useEffect(() => {
    dispatch(clearSearchList())
    getAlbumData(albumId);
  }, [albumId]);

  const getAlbumData = (id) => {
    setLoadingAlbum(true);
    axios(albumURL + id, {
      headers: albumHeaders,
    })
      .then((res) => {
        if (res.status === 200) {
          setAlbumData(res.data);
          setLoadingAlbum(false);
          console.log(albumData);
        } else {
          setErrorAlbumMsg(res.request.status);
          setLoadingAlbum(false);
        }
      })
      .catch((err) => {
        setErrorAlbumMsg(err.message);
        setLoadingAlbum(false);
      });
  };

  return (
    <Row>
      <NavbarComponent />
      <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
        <MainLinksComponent />


        {searchList.length !== 0 && !loadingSearch && <SearchResultsComponent list={searchList}/>}
        {loadingSearch && <LoaderSearchSongsComponent />}
        {errorSearch && <ErrorDefaultSongsComponent errorMsg={errorSearch}/>}

        {loadingAlbum && <LoadingAlbumPageComponent />}
        {Object.keys(albumData).length > 0 && !loadingAlbum && (
          <AlbumContainerComponent albumData={albumData} />
        )}
        {errorAlbumMsg && (
          <ErrorDefaultSongsComponent errorMsg={errorAlbumMsg} />
        )}
      </Col>
    </Row>
  );
}
