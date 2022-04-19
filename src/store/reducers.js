import { combineReducers } from "redux";

import InformationsReducer from "./informations/reducer";

const rootReducer = combineReducers({
  InformationsReducer,
});

export default rootReducer;