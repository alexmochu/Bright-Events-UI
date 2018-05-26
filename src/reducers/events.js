import { EVENTS_FETCHED } from '../types';

export default (events = [], action) => {
    switch (action.type) {
    case EVENTS_FETCHED:
        return action.events;
    default:
        return events;
    }
};