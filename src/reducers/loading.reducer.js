import {REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESS, EVENTS_FETCHED,  EVENT_FETCHED, MY_EVENTS_FETCHED} from '../types';

export default (loading=false, action) => {
    switch (action.type) {
    case REQUEST_STARTED:
        return true;
    case REQUEST_FAILED:
    case REQUEST_SUCCESS:
    case EVENTS_FETCHED:
    case MY_EVENTS_FETCHED:
        return false;
    case EVENT_FETCHED:
        return false;
    default:
        return loading;
    }
};