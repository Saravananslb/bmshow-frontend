import { OPEN_AUTH, ADD_MOVIES, ADD_ACTIVE_MOVIE, ADD_THEATRE_LIST, BOOK_TICKET_MESSAGE } from "./action.types";

export const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_AUTH:
      return {
        ...state,
        openAuth: action.payload.openAuth,
      };
    case ADD_MOVIES:
      return {
        ...state,
        moviesList: action.payload.moviesList
      }

    case ADD_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: action.payload.activeMovie
      }

    case ADD_THEATRE_LIST:
      return {
        ...state,
        theatreList: action.payload.theatreList
      }

    case BOOK_TICKET_MESSAGE:
      return {
        ...state,
        message: action.payload.message
      }

    default:
      return state;
  }
};
