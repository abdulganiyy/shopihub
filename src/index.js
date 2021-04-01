import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./redux/reducers/products";
import userReducer from "./redux/reducers/user";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] dispatch", action);
      const result = next(action);
      console.log("[Middleware] next", store.getState());
      return result;
    };
  };
};

const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  combineEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
