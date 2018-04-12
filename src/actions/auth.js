import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

export const login = (credentials) => dispatch => 
    api.user.login(credentials).then(user => {
        localStorage.JWT = user.auth_token;
        console.log(localStorage.JWT );
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem('JWT');
    dispatch(userLoggedOut());
};