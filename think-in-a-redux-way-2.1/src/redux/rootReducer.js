import { combineReducers } from "redux";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import counterReducer from "./counter/counterReducer";


const rootReducer = combineReducers({
    dynamicCounter: dynamicCounterReducer,
    counter: counterReducer
    
})
export default rootReducer;