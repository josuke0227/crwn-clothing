import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const applyMiddlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  applyMiddlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...applyMiddlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
