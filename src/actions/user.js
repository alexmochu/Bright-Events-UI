import { userLoggedIn, passwordReset } from './auth';
import api from '../api';

export const signup = (data) => dispatch =>
    api.user.signup(data).then(user => dispatch(userLoggedIn(user)));

export const reset = (data) => dispatch =>
    api.user.resetPassowrd(data).then(user => dispatch(passwordReset(user)));