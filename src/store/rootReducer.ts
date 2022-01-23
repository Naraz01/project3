import { combineReducers } from "redux";
import { groupeReducer } from "./ducks/groupe/reducer";

export const rootReducer = combineReducers({
    groupe: groupeReducer,
});