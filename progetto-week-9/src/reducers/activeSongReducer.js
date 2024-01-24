const activeSongReducer = (state = { activeSong: {} }, action) => {
    switch (action.type) {
     
      case "SET_ACTIVE_SONG":
          return action.payload

      default:
        return state;
    }
  };
  
  export default activeSongReducer;