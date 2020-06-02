import { combineReducers } from "redux";

//Reducers
import settingsReducer from "./reducers/SettingsReducer";

export default combineReducers({
  settings: settingsReducer,
});
