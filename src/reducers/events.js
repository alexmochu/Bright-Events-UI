import { EVENTS_FETCHED, MY_EVENTS_FETCHED, GUESTS_FETCHED, RSVPD_EVENTS_FETCHED } from '../types';

export default (events = [], action) => {
    switch (action.type) {
    case EVENTS_FETCHED:
        return action.events;
    case MY_EVENTS_FETCHED:
        return action.events;
    case GUESTS_FETCHED:
        return action.guests;
    case RSVPD_EVENTS_FETCHED:
        return action.events;
    default:
        return events;
    }
};