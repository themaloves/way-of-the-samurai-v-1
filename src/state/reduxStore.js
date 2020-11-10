import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  navigation: navigationReducer
});

let store = createStore(reducers);

window.store = store;

export default store;