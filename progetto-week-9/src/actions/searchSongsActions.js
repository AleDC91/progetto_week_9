import axios from "axios";
import { searchURL, searchHeaders } from "../config";


export const setSearch = (query) => {
  return {
    type: "SET_QUERY",
    payload: query,
  };
};

export const clearSearch = () => {
  return {
    type: "CLEAR_QUERY",
  };
};

export const setSearchError = (error) => {
  console.log("set search error")
  return {
    type: "SET_SEARCH_ERROR",
    payload: error,
  };
};

export const clearSearchError = () => {
  console.log("clear search error")
  return {
    type: "CLEAR_SEARCH_ERROR",
  };
};

export const setSearchLoading = () => {
  return {
    type: "SET_SEARCH_LOADING",
  };
};

export const endSearchLoading = () => {
  return {
    type: "END_SEARCH_LOADING",
  };
};

export const searchSongs = (query) => {
  return (dispatch, state) => {
    dispatch(clearSearchError());
    dispatch(setSearchLoading());
    axios(searchURL + query, {
       headers: searchHeaders,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          dispatch({ type: "SEARCH", payload: res.data.data });
          dispatch(endSearchLoading());
        } else {
          dispatch(setSearchError(res.request.status));
        }
      })
      .catch((err) => dispatch(setSearchError(err.message)));
  };
};

export const clearSearchList = () => {
    return {
        type: "CLEAR_SEARCH_LIST"
      };
}
