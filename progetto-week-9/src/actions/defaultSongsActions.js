import { defaultArtists } from "../config";
import axios from "axios";
import { searchURL, searchHeaders } from "../config";
import { useDispatch } from "react-redux";

export const getAllDefaultSongs = () => {
  return async function (dispatch, getState) {
    try {
      dispatch(removeError());
      dispatch(setLoading());
      console.log(getState());
      await Promise.all([
        dispatch(getRockSongs()),
        dispatch(getPopSongs()),
        dispatch(getHipHopSongs()),
      ]);
      console.log(getState());
    } catch (error) {
      console.log("ERROR");
      console.log(error.message);

      dispatch(setError(error.message));
    } finally {
      dispatch(endLoading());
    }
  };
};

export const getRockSongs = () => {
  return function (dispatch, getState) {
    return Promise.all(
      defaultArtists.rockArtists.map((artist) => {
        return new Promise((resolve, reject) => {
          const rockList = getState().defaultSongs.songsLists.rock;
          if (rockList.length === 0) {
            console.log("Fetching rock songs for", artist);
            axios(searchURL + artist, {
                headers: searchHeaders,
            })
              .then((res) => {
                if (res.request.status === 200) {
                  console.log(res);
                  dispatch({
                    type: "ADD_TO_ROCK_LIST",
                    payload: res.data.data[0],
                  });
                  resolve();
                } else {
                  console.log("ERROR");
                  dispatch(setError(res.request.status));
                  reject(res.request.status);
                }
              })
              .catch((err) => {
                console.log("errore dal catch");
                console.log(err);

                dispatch(setError(err.message));
                reject(err);
              });
          } else {
            console.log("Rock songs already present for", artist);
            resolve();
          }
        });
      })
    );
  };
};

export const getPopSongs = () => {
  return function (dispatch, getState) {
    return Promise.all(
      defaultArtists.popArtists.map((artist) => {
        return new Promise((resolve, reject) => {
          const popList = getState().defaultSongs.songsLists.pop;
          if (popList.length === 0) {
            console.log("Fetching pop songs for", artist);
            axios(searchURL + artist, {
               headers: searchHeaders,
            })
              .then((res) => {
                if (res.request.status === 200) {
                  console.log(res);
                  dispatch({
                    type: "ADD_TO_POP_LIST",
                    payload: res.data.data[0],
                  });
                  resolve();
                } else {
                  console.log("ERROR");

                  console.log(res);
                  dispatch(setError(res.request.status));
                  reject(res.request.status);
                }
              })
              .catch((err) => {
                console.log("errore dal catch");
                dispatch(setError(err.message));
                reject(err);
              });
          } else {
            console.log("Pop songs already present for", artist);
            resolve();
          }
        });
      })
    );
  };
};

export const getHipHopSongs = () => {
  return function (dispatch, getState) {
    return Promise.all(
      defaultArtists.hipHopArtists.map((artist) => {
        return new Promise((resolve, reject) => {
          const hipHopList = getState().defaultSongs.songsLists.hipHop;
          if (hipHopList.length === 0) {
            console.log("Fetching pop songs for", artist);
            axios(searchURL + artist, {
               headers: searchHeaders,
            })
              .then((res) => {
                if (res.request.status === 200) {
                  console.log(res);
                  dispatch({
                    type: "ADD_TO_HIPHOP_LIST",
                    payload: res.data.data[0],
                  });
                  resolve();
                } else {
                  dispatch(setError(res.request.status));
                  reject(res.request.status);
                }
              })
              .catch((err) => {
                console.log("errore dal catch");
                dispatch(setError(err.message));
                reject(err);
              });
          } else {
            console.log("HipHop songs already present for", artist);
            resolve();
          }
        });
      })
    );
  };
};

export const setLoading = () => {
  console.log("Setting loading to true");
  return {
    type: "SET_LOADING",
  };
};

export const endLoading = () => {
  console.log("Setting loading to false");
  return {
    type: "END_LOADING",
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const removeError = () => {
  return {
    type: "REMOVE_ERROR",
  };
};
