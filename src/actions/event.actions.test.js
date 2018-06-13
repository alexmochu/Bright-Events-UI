import * as actions from './events.actions';
import * as types from '../types';

describe('actions', () => {
    it('fetches all events', () => {
        const events = {};
        const expectedAction = {
            type: types.EVENTS_FETCHED,
            events
        };
        expect(actions.eventsFetched(events)).toEqual(expectedAction);
    });
    it('fetches current_user events', () => {
        const events = {};
        const expectedAction = {
            type: types.MY_EVENTS_FETCHED,
            events
        };
        expect(actions.myeventsFetched(events)).toEqual(expectedAction);
    });
    it('creates an event', () => {
        const data = {};
        const expectedAction = {
            type: types.EVENT_CREATED,
            data
        };
        expect(actions.eventCreated(data)).toEqual(expectedAction);
    });
    it('fetches a single event', () => {
        const event = {};
        const expectedAction = {
            type: types.EVENT_FETCHED,
            event
        };
        expect(actions.eventFetched(event)).toEqual(expectedAction);
    });
    it('fetches an events guests', () => {
        const guests = {};
        const expectedAction = {
            type: types.GUESTS_FETCHED,
            guests
        };
        expect(actions.guestsFetched(guests)).toEqual(expectedAction);
    });
    it('fetches rsvp\'d events', () => {
        const events = {};
        const expectedAction = {
            type: types.RSVPD_EVENTS_FETCHED,
            events
        };
        expect(actions.rsvpdEventsFetched(events)).toEqual(expectedAction);
    });
    it('deletes an event', () => {
        const expectedAction = {
            type: types.EVENT_DELETED
        };
        expect(actions.eventDeleted()).toEqual(expectedAction);
    });
    it('rsvps to an event', () => {
        const expectedAction = {
            type: types.EVENT_RSVPD
        };
        expect(actions.eventRsvpd()).toEqual(expectedAction);
    });
    it('removes event rsvp', () => {
        const expectedAction = {
            type: types.RSVP_REMOVED
        };
        expect(actions.rsvpRemoved()).toEqual(expectedAction);
    });
    it('updates an event', () => {
        const data = {};
        const expectedAction = {
            type: types.EVENT_UPDATED,
            data
        };
        expect(actions.eventEdited(data)).toEqual(expectedAction);
    });
});