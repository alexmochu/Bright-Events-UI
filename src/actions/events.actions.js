import client from './../client';
import { EVENTS_FETCHED } from '../types';
import { requestStarted, requestFailed } from './api.actions';

const eventsFetched= events=>({
    type: EVENTS_FETCHED,
    events
});

export const fetchEvents = () => dispatch => {
    dispatch(requestStarted());
    return client.get('/events').then(res => {
        dispatch(eventsFetched(res.data.events));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};