const searchSongsReducer = (
  state = {
    searchSongs: {
      query: "",
      songsList: [],
      loading: false,
      errorMsg: "",
    },
  },
  action
) => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "CLEAR_QUERY":
      return {
        ...state,
        query: "",
      };

    case "SEARCH":
      return {
        ...state,
        songsList: action.payload,
      };

    case "SET_SEARCH_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };

    case "CLEAR_SEARCH_ERROR":
      return {
        ...state,
        errorMsg: "",
      };

    case "SET_SEARCH_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "END_SEARCH_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "CLEAR_SEARCH_LIST":
        return {
            ...state,
            songsList: [],
          };

    default:
      return state;
  }
};

export default searchSongsReducer;
