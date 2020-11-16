import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  navigation: navigationReducer,
  users: usersReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;