import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";

import logger from "redux-logger"; // library or middelware to debug log our state
// import thunk from "redux-thunk"; // middleware for async api request to fetch data(basically handle action with function not objects)
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root.reducer";
// import {onFetchCollectionsStart} from "./shop/shop.sagas";
import RootSaga from "./root.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(onFetchCollectionsStart);
// sagaMiddleware.run(onFetchCollectionsStart); // not using this coz if there are multiple function then it will become complex
sagaMiddleware.run(RootSaga); // so instead using RootSaga which contain all other saga functions

const persistor = persistStore(store);

export {store, persistor};
