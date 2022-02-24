import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";

import logger from "redux-logger"; // library or middelware to debug log our state
import thunk from "redux-thunk"; // middleware for async api request to fetch data(basically handle action with function not objects)

import rootReducer from "./root.reducer";

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export {store, persistor};
