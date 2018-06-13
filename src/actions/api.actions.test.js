import * as actions from './api.actions';
import * as types from '../types';

describe('actions', () => {
    it('starts a request', () => {
        const expectedAction = {
            type: types.REQUEST_STARTED
        };
        expect(actions.requestStarted()).toEqual(expectedAction);
    });
    it('show positive for successful request', () => {
        const expectedAction = {
            type: types.REQUEST_SUCCESS
        };
        expect(actions.requestSuccess()).toEqual(expectedAction);
    });
    it('show negative for successful request', () => {
        const expectedAction = {
            type: types.REQUEST_FAILED
        };
        expect(actions.requestFailed()).toEqual(expectedAction);
    });
});