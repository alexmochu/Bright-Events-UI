import { EVENT_CREATED, EVENT_FETCHED, EVENT_RSVPD, RSVP_REMOVED, EVENT_UPDATED, EVENT_DELETED, MESSAGE_CLEARED } from '../types';

const initialState = {
    created: false,
    deleted: false,
    rsvpd: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case EVENT_CREATED:
        return {...state, created: true };
    case EVENT_FETCHED:
        return {...state, ...action.event};
    case EVENT_UPDATED:
        return action.data;
    case EVENT_DELETED:
        return {...state, deleted: true };
    case EVENT_RSVPD:
        return {...state, rsvpd: true };
    case RSVP_REMOVED:
        return {...state, rsvpd: false };
    case MESSAGE_CLEARED:
        return {...state, message: ''}; 
    default:
        return state;
    }
};