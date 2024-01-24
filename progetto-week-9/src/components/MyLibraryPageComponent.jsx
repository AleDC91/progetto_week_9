import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import NavbarComponent from './NavbarComponent'
import MainLinksComponent from './MainLinksComponent'
import SearchResultsComponent from './SearchResultsComponent'
import LoaderSearchSongsComponent from './LoaderSearchSongsComponent'
import ErrorDefaultSongsComponent from './ErrorDefaultSongsComponent'
import { useDispatch, useSelector } from 'react-redux'
import MyLibraryContainerComponent from './MyLibraryContainerComponent'
import { clearSearchList } from '../actions/searchSongsActions'

export default function MyLibraryPageComponent() {

const dispatch = useDispatch();

  const searchList = useSelector((state) => state.searchSongs.songsList);
  const loadingSearch = useSelector((state) => state.searchSongs.loading);
  const errorSearch = useSelector((state) => state.searchSongs.errorMsg);

  useEffect(() => {
    dispatch(clearSearchList())
  }, [dispatch])

  return (
    <Row>
    <NavbarComponent />
    <Col xs={12} lg={{ span: 9, offset: 3 }} className="mainPage">
      <MainLinksComponent />
      {searchList.length !== 0 && !loadingSearch && (
        <SearchResultsComponent list={searchList} />
      )}
      {loadingSearch && <LoaderSearchSongsComponent />}
      {errorSearch && <ErrorDefaultSongsComponent errorMsg={errorSearch} />}
      <MyLibraryContainerComponent />
    </Col>
  </Row>
  )
}
