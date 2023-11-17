import axios from "axios";

export const addFav = (character) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    const response = await axios.post(endpoint, character);
    return dispatch({
      type: "ADD_FAV",
      payload: response.data,
    });
  };
};

export const removeFav = (id) => {
   return async (dispatch) => {
     const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    const response = await axios.delete(endpoint)
      return dispatch({
        type: "REMOVE_FAV",
        payload: response.data,
      });
  };
};

export const filterCharacters = (gender) => ({
  type: "FILTER",
  payload: gender,
});

export const orderCharacters = (order) => ({
  type: "ORDER",
  payload: order,
});

export const initializeFavoriteCharacters = (favoriteCharacters) => ({
  type: 'INITIALIZE_FAVORITE_CHARACTERS',
  payload: favoriteCharacters,
});