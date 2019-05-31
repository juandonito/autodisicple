import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

import { loadState, saveState } from '../localStorage'

const logger = createLogger();

const persistedState = loadState();

console.log(persistedState);

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(
        logger
    )
)

store.subscribe(() => {
    saveState({
        ...store.getState()
    });
});

export default store;