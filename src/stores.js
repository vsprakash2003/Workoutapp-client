import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import rootReducer from "./combined.reducer";

let middlewares = [reduxThunk];

const logger = createLogger();

if (process.env.Node_ENV !== "production" && process.env.Node_ENV !== "test") {
  middlewares = [
    ...middlewares,
    logger,
    // eslint-disable-next-line global-require
    require("redux-immutable-state-invariant").default()
  ];
}

export default function configureStore(history) {
  const composeEnhancers =
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares, routerMiddleware(history))
  );
  const store = createStore(rootReducer(history), enhancer);

  if (
    process.env.Node_ENV !== "production" &&
    process.env.Node_ENV !== "test" &&
    module.hot
  ) {
    module.hot.accept("./combined.reducer", () => {
      // eslint-disable-next-line global-require
      const nextReducer = require("./combined.reducer").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
