import { EVENT_CREATED } from '../types';
import api from '../api';


const eventCreated = data => ({
    type: EVENT_CREATED,
    data
});

export const createEvent = data => dispatch =>
    api.event.create(data).then(event => dispatch(eventCreated(event)));