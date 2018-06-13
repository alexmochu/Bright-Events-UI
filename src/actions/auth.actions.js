import jwt from 'jsonwebtoken';

import api from '../api';
import client from './../client';
import setAuthToken from '../utils/setAuthToken';
import { requestStarted, requestFailed } from './api.actions';
import { USER_LOGGED_IN, USER_LOGGED_OUT, SET_CURRENT_USER, PASSWORD_RESET, USER_REGISTERED, RESET_LINK_REQUESTED } from '../types';


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

export const passwordReset = data => ({
    type: PASSWORD_RESET,
    data
});

export const userRegistered  = data => ({
    type: USER_REGISTERED,
    data
}); 

export const linkRequested = data => ({
    type: RESET_LINK_REQUESTED,
    data
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
    api.user.logout().then(user => {
        localStorage.removeItem('JWT');
        dispatch(userLoggedOut());
        window.location = '/login';
    });
};

export const resetPassword = (data, token) => dispatch => {
    dispatch(requestStarted());
    return client.put(`/auth/reset-password/${token}`, data ).then(res => {
        dispatch(passwordReset(res.data));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const requestLink = (data) => dispatch => {
    dispatch(requestStarted());
    return client.post('/reset-password-request', data ).then(res => {
        dispatch(linkRequested(res.data));
    }).catch(error=>dispatch(requestFailed('something went wrong')));
};

export const signup = (data) => dispatch =>
    api.user.signup(data).then(user => dispatch(userRegistered(user)));

