import { applyMiddleware, compose, createStore } from "redux";
import { thunk} from "redux-thunk";


export const store = createStore(
    {},
    compose(
        applyMiddleware(thunk)
    )
);