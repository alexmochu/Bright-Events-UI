import client from './../client';
import { EVENTS_FETCHED, EVENT_CREATED, EVENT_FETCHED, MY_EVENTS_FETCHED, GUESTS_FETCHED, RSVPD_EVENTS_FETCHED, EVENT_DELETED, EVENT_RSVPD, RSVP_REMOVED, EVENT_UPDATED, MESSAGE_CLEARED } from '../types';
import { requestStarted, requestFailed } from './api.actions';


export const eventsFetched = events=> ({
    type: EVENTS_FETCHED,
    events
});

export const myeventsFetched = events=> ({
    type: MY_EVENTS_FETCHED,
    events
});

export const eventCreated = data => ({
    type: EVENT_CREATED,
    data
});

export const eventFetched = event => ({
    type: EVENT_FETCHED,
    event
});

export const guestsFetched = guests => ({
    type: GUESTS_FETCHED,
    guests
});

export const rsvpdEventsFetched = events => ({
    type: RSVPD_EVENTS_FETCHED,
    events
});

export const eventDeleted = () =>( {
    type: EVENT_DELETED
});

export const eventRsvpd = () => ({
    type: EVENT_RSVPD,
});

export const rsvpRemoved = () => ({
    type: RSVP_REMOVED,
});

export const eventEdited = (data) => ({
    type: EVENT_UPDATED,
    data
});

export const messageCleared = () => ({
    type: MESSAGE_CLEARED
});


// export const clearMessage = () => dispatch => {
//     dispatch(requestStarted());
// };

export const fetchEvent = (eventId) => dispatch => {
    dispatch(requestStarted());
    return client.get(`/events/${eventId}`).then(res => {
        dispatch(eventFetched(res.data.event));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const fetchEvents = () => dispatch => {
    dispatch(requestStarted());
    return client.get('/events').then(res => {
        dispatch(eventsFetched(res.data.events));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const fetchmyEvents = (userId) => dispatch => {
    dispatch(requestStarted());
    return client.get(`/${userId}/events`).then(res => {
        dispatch(myeventsFetched(res.data.events));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const createEvent = (event) => dispatch => {
    dispatch(requestStarted());
    return client.post('/events', {event}).then(res => {
        dispatch(eventCreated(res.data.event));
        return res.data.event;
    });
};

export const fetchGuests = (eventId) => dispatch => {
    dispatch(requestStarted());
    return client.get(`/events/${eventId}/rsvp`).then(res => {
        dispatch(guestsFetched(res.data.guests));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const fetchRsvpEvents = (userId) => dispatch => {
    dispatch(requestStarted());
    return client.get(`/user/${userId}/rsvp`).then(res => {
        dispatch(rsvpdEventsFetched(res.data.events));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const deleteEvent = (eventId) => dispatch => {
    dispatch(requestStarted());
    return client.delete(`/events/${eventId}`).then(res => {
        dispatch(eventDeleted());
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const rsvpEvent = (eventId) => dispatch => {
    dispatch(requestStarted());
    return client.post(`/events/${eventId}/rsvp`).then(res => {
        dispatch(eventRsvpd());
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const removeRsvp = (eventId) => dispatch => {
    dispatch(requestStarted());
    return client.delete(`/events/${eventId}/rsvp`).then(res => {
        dispatch(rsvpRemoved());
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const editEvent = (eventId, data) => dispatch => {
    dispatch(requestStarted());
    return client.put(`/events/${eventId}`, data).then(res => {
        dispatch(eventEdited(data));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};