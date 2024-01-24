export const setSong = (song) => {
    console.log(song)
    return {
        type: "SET_ACTIVE_SONG",
        payload: song
    }
}