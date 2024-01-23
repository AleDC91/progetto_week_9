const defaultSongsReducer = (
  state = {
    defaultSongs: {
      songsLists: {
        rock: [],
        pop: [],
        hipHop: [],
      },
      loading: false,
      errorMsg: "",
    },
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_ROCK_LIST":
      return {
        ...state,
        songsLists: {
          ...state.songsLists,
          rock: [...state.songsLists.rock, action.payload],
        },
      };

    case "ADD_TO_POP_LIST":
      return {
        ...state,
        songsLists: {
          ...state.songsLists,
          pop: [...state.songsLists.pop, action.payload],
        },
      };

    case "ADD_TO_HIPHOP_LIST":
      return {
        ...state,
        songsLists: {
          ...state.songsLists,
          hipHop: [...state.songsLists.hipHop, action.payload],
        },
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "SET_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };

    case "REMOVE_ERROR":
      return {
        ...state,
        errorMsg: "",
      };

    default:
      return state;
  }
};

export default defaultSongsReducer;
