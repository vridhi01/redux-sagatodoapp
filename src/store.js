import {createStore,applyMiddleware} from "redux";
import rootReducer from "./reducers/index";
import mySaga from "./saga"
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)
export default store;