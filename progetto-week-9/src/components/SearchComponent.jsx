import React from "react";

import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  clearSearch,
  searchSongs,
} from "../actions/searchSongsActions";

export default function SearchComponent() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.searchSongs.query);

  const handleOnChange = (e) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchSongs(query));
    dispatch(clearSearch());
  };

  return (
    <Form className="input-group" onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mt-3 d-flex ">
        <Form.Control
          type="text"
          placeholder="Search..."
          id="search-form"
          value={query}
          onChange={(e) => handleOnChange(e)}
        />

        <Button
          type="submit"
          className="btn-sm h-100 btn-dark btn-outline-secondary"
          id="button-addon1"
          style={{ marginBottom: "4%" }}
        >
          GO
        </Button>
      </Form.Group>
    </Form>
  );
}
