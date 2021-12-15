<<<<<<< HEAD
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";



const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger);
} 

const store = createStore(rootReducer, applyMiddleware(...middlewares));

=======
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";



const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger);
} 

const store = createStore(rootReducer, applyMiddleware(...middlewares));

>>>>>>> origin/master
export default store;