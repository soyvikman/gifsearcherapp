import { combineReducers } from "redux";
import buscadorReducer from "./buscadorReducer";

const rootReducer = combineReducers({
  datos: buscadorReducer
});

export default rootReducer;
