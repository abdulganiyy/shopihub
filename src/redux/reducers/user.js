import * as actionsTypes from "../actions/actionsTypes.js";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };

    case actionsTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.userId,
        token: action.idToken,
        loading: false,
      };
    case actionsTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error.message,
        loading: false,
      };
    case actionsTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
