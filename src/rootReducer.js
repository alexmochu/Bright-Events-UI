import { combineReducers } from 'redux';

import user from './reducers/user';
import auth from './reducers/auth';
import events from './reducers/events';
import loading from './reducers/loading.reducer';
import error from './reducers/error.reducer';
import event from './reducers/event.reducer';

export default combineReducers({
    user,
    auth,
    events,
    event,
    error,
    loading
});