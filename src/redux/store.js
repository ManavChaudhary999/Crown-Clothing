import {createStore, applyMiddleware} from "redux";

import logger from "redux-logger"; // library or middelware to debug log our state

import rootReducer from "./root.reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
