import * as actionsTypes from "./actionsTypes.js";
import axios from "axios";

export const getProducts = () => {
  return { type: actionsTypes.GET_PRODUCTS };
};

export const addToCart = (idt) => {
  return { type: actionsTypes.ADD_TO_CART, id: idt };
};

export const getCart = () => {
  return { type: actionsTypes.GET_CART };
};

const authStart = () => {
  return {
    type: actionsTypes.AUTH_START,
  };
};

const authSuccess = (authData) => {
  return {
    type: actionsTypes.AUTH_SUCCESS,
    idToken: authData.idToken,
    userId: authData.localId,
  };
};

const authFail = (err) => {
  return {
    type: actionsTypes.AUTH_FAIL,
    error: err,
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: actionsTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const auth = (name, email, password, formType) => {
  return (dispatch) => {
    dispatch(authStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLwuo5yv1V18-MzScX8OXHRtZjpXl2Xt0";

    if (formType === "login") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLwuo5yv1V18-MzScX8OXHRtZjpXl2Xt0";
    }

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        let expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("expirationDate", expirationDate);

        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");

    if (!token) {
      dispatch(authLogout());
    } else {
      let expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch(authSuccess({ idToken: token, localId: userId }));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
