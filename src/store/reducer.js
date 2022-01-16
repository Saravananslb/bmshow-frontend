import { OPEN_AUTH } from "./action.types";

export const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_AUTH:
      return {
        ...state,
        openAuth: action.payload.openAuth,
      };

    default:
      return state;
  }
};
