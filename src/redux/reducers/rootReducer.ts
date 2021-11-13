import { combineReducers } from "redux";
import authReducer from "./authReducer";

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

export default rootReducer;