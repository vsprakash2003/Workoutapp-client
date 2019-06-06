import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from './combined.reducer'
import {createLogger} from 'redux-logger'

let middlewares = [
    thunk
]

const logger = createLogger();

if (process.env.Node_ENV !== "production" && process.env.Node_ENV !== "test") {
    middlewares = [
        ...middlewares,
        logger,
        require("redux-immutable-state-invariant").default()
    ]
}

export default function configureStore(history) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares, routerMiddleware(history))
    );
    const store = createStore(
        rootReducer(history),
        enhancer
    )
    
    if (process.env.Node_ENV !== "production" && process.env.Node_ENV !== "test" && module.hot) {
        module.hot.accept("./combined.reducer", () => {
            const nextReducer = require("./combined.reducer").default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}