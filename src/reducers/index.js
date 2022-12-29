import authReducer from "./authReducer";
import questionReducer from "./questionReducer";
import fetchQuestionReducer from "./fetchQuestionReducer";
import {combineReducers} from "redux";


const Reducers = combineReducers({authReducer,questionReducer,fetchQuestionReducer});



export default Reducers;