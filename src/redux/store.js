import { createStore, applyMiddleware} from "redux";
import rootReducer from "./root.reducer";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {persistStore, } from "redux-persist";

const numberPersistConfig = {
    key: "persistedStore"
};

const persist = (persistConfig, reducer) =>
  persistReducer({ ...persistConfig, storage }, reducer);

const reducer = persist(numberPersistConfig, rootReducer);
const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default store;