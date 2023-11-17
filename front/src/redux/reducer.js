const initialState = {
  myFavorites: [],
  filteredCharacters: [],
};

//[NOTA]: ten en cuenta que el id que recibes por payload es un string, y el id de los personajes es un número.

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_FAVORITE_CHARACTERS':
      return {
        ...state,
        myFavorites: action.payload,
        filteredCharacters: action.payload
      };
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        filteredCharacters: action.payload,
      };

    case "REMOVE_FAV":
      // const removedOneFavorite = state.myFavorites.filter((fav) => fav.id !== Number(action.payload));
      // const removedOneFilteredFavorite = state.filteredCharacters.filter((fav) => fav.id !== Number(action.payload));
      return {
        ...state,
        myFavorites: action.payload,
        filteredCharacters: action.payload
      };

    case "FILTER":
      if (action.payload === "ALL") return { 
        ...state, 
        filteredCharacters: state.myFavorites 
      }
      const filteredCharacters = state.myFavorites.filter((fav) => fav.gender === action.payload);
      return {
        ...state,
        filteredCharacters: filteredCharacters,
       };

    case "ORDER":
      let copyFavorites = [...state.filteredCharacters];
      if(action.payload === 'A'){
        copyFavorites.sort((a, b) => a.name > b.name ? 1 : -1)
      }
      if(action.payload === 'D'){
        copyFavorites.sort((a, b) => a.name < b.name ? 1 : -1)
      }
      return {
        ...state,
        filteredCharacters: copyFavorites,
      };
      
    default:
      return state;
  }
};

export default favoriteReducer;
