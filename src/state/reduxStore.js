import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  navigation: navigationReducer,
  users: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;