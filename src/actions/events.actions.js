import client from './../client';
import { EVENTS_FETCHED, EVENT_CREATED, EVENT_FETCHED, MY_EVENTS_FETCHED, GUESTS_FETCHED, RSVPD_EVENTS_FETCHED, EVENT_DELETED, EVENT_RSVPD, RSVP_REMOVED } from '../types';
import { requestStarted, requestFailed } from './api.actions';

const eventsFetched = events=>({
    type: EVENTS_FETCHED,
    events
});

const myeventsFetched = myevents=>({
    type: MY_EVENTS_FETCHED,
    myevents
});

const eventCreated = data =>({
    type: EVENT_CREATED,
    data
});

const eventFetched = event =>({
    type: EVENT_FETCHED,
    event
});

const guestsFetched = guests =>({
    type: GUESTS_FETCHED,
    guests
});

const rsvpdEventsFetched = events =>({
    type: RSVPD_EVENTS_FETCHED,
    events
});

const eventDeleted = () =>({
    type: EVENT_DELETED
});

const eventRsvpd = () =>({
    type: EVENT_RSVPD
});

const rsvpRemoved = () =>({
    type: RSVP_REMOVED
});


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
    }).catch(error=>dispatch(requestFailed('something went wrong')));
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
        window.location = '/events';
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const rsvpEvent = (eventId) => dispatch => {
    dispatch(requestStarted());
    return client.post(`/events/${eventId}/rsvp`).then(res => {
        dispatch(eventRsvpd(res.data.events));
        window.location.reload();
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const removeRsvp = (eventId) => dispatch => {
    dispatch(requestStarted());
    return client.delete(`/events/${eventId}/rsvp`).then(res => {
        dispatch(rsvpRemoved());
        window.location.reload();
        
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};
