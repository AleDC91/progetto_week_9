
const myLibraryReducer = (state = { myLibrary: [] }, action) => {
    switch (action.type) {
     
      case "ADD_TO_FAVOURITES":
          return [...state, action.payload]


      case "REMOVE_FROM_FAVOURITES":
        return state.filter(item => item.id !== action.payload.id)
      default:
        return state;
    }
  };
  
  export default myLibraryReducer;