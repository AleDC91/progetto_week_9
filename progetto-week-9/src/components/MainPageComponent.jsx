import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import MainLinksComponent from "./MainLinksComponent";
import SearchResultsComponent from "./SearchResultsComponent";
import GenresContainerComponent from "./GenresContainerComponent";
import { useDispatch, useSelector } from "react-redux";
import {getAllDefaultSongs} from "../actions/defaultSongsActions";
import LoaderDefaultContainerComponent from "./LoaderDefaultContainerComponent"
import ErrorDefaultSongsComponent from "./ErrorDefaultSongsComponent"
import LoaderSearchSongsComponent from "./LoaderSearchSongsComponent"
import { clearSearchList } from "../actions/searchSongsActions"

export default function MainPageComponent() {

const dispatch = useDispatch()


  useEffect(() => {
    
    dispatch(getAllDefaultSongs());
    dispatch(clearSearchList())
  }, [dispatch]);


  const loadingDefault = useSelector((state) => state.defaultSongs.loading);
  const errorDefault = useSelector((state) => state.defaultSongs.errorMsg);


  const searchList = useSelector((state) => state.searchSongs.songsList);
  const loadingSearch = useSelector((state) => state.searchSongs.loading);
  const errorSearch = useSelector((state) => state.searchSongs.errorMsg);

  return (
    <Row>
      <NavbarComponent />
      <Col xs={12} lg={{ span: 9, offset: 3 }} className="mainPage">
        <MainLinksComponent />
        {searchList.length !== 0 && !loadingSearch && <SearchResultsComponent list={searchList}/>}
        {loadingSearch && <LoaderSearchSongsComponent />}
        {errorSearch && <ErrorDefaultSongsComponent errorMsg={errorSearch}/>}

        {!loadingDefault && !errorDefault && <GenresContainerComponent />  }
        {loadingDefault && !errorDefault && <LoaderDefaultContainerComponent />} 
        {errorDefault && <ErrorDefaultSongsComponent errorMsg={errorDefault} />}
      </Col>
    </Row>
  );
}
