import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";
import { createLogger } from "redux-logger";
import whitelist from "./whitelist";
import appReducer from "./appReducer";

export default function setup(done) {
  const isDev = global.isDebuggingInChrome || __DEV__;

  const logger = createLogger();

  const middleware = [autoRehydrate(), applyMiddleware(...[thunk, logger])];

  if (isDev) {
    middleware.push(
      applyMiddleware(require("redux-immutable-state-invariant").default())
    );
  }

  const store = createStore(appReducer, {}, compose(...middleware));

  // Attach the store to the Chrome debug window
  if (global.isDebuggingInChrome) {
    window.store = store;
  }

  persistStore(store, { whitelist, storage: AsyncStorage }, () => done(store));
}
