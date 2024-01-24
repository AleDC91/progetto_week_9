export const addFavourite = (track) => {
    return {
        type: "ADD_TO_FAVOURITES", payload: track
    }
}


export const removeFavourite = (track) => {
    return {
        type: "REMOVE_FROM_FAVOURITES", payload: track
    }
}

