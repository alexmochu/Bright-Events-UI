import jwt from 'jsonwebtoken';

import { USER_LOGGED_IN, USER_LOGGED_OUT, SET_CURRENT_USER } from '../types';
import api from '../api';
import setAuthToken from '../utils/setAuthToken';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const login = (credentials) => dispatch => 
    api.user.login(credentials).then(user => {
        const token = user.auth_token;
        localStorage.JWT = token;
        setAuthToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem('JWT');
    dispatch(userLoggedOut());
};