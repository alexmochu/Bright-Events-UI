import * as actions from './auth';
import * as types from '../types';

describe('actions', () => {
    it('should create an action to login a user', () => {
        const user = '';
        const expectedAction = {
            type: types.USER_LOGGED_IN,
            user
        };
        expect(actions.userLoggedIn(user)).toEqual(expectedAction);
    });
    it('should create an action to logout a user', () => {
        const expectedAction = {
            type: types.USER_LOGGED_OUT,
        };
        expect(actions.userLoggedOut()).toEqual(expectedAction);
    });
});