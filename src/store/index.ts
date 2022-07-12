import { createStore, combineReducers } from 'redux';

import auth from './reducers/auth.reducer';

const reducers = combineReducers({
    auth
})

const store = createStore(reducers);

export default store;