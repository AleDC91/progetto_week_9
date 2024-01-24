import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MyLibraryListComponent from './MyLibraryListComponent'
import { useSelector } from 'react-redux'

export default function MyLibraryContainerComponent() {
const favouritesList = useSelector(state => state.myLibrary);
console.log(favouritesList)


  return (
    <>
    <Row>
      <Col xs={12} md={10} /*lg={10}*/ className="mt-5">
        <h2 className="titleMain">My Library</h2>
      </Col>
    </Row>
    <Col md={8} className="p-5">
      <Row>
        <Col md={10} className="mb-5" id="trackList">
          {favouritesList.length > 0 ? favouritesList.map((track) => <MyLibraryListComponent track={track}/>) : <h3 className='text-white'>Your library is empty</h3>}
        </Col>
      </Row>
    </Col>
   

    </>

  )
}
