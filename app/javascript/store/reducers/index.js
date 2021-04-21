import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";

import sidebarReducer from "./sidebarReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  reduxTokenAuth: reduxTokenAuthReducer,
});

export default rootReducer;
