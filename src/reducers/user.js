import { USER_LOGGED_IN, USER_LOGGED_OUT, PASSWORD_RESET, USER_REGISTERED, RESET_LINK_REQUESTED  } from '../types';

export default  function user(state = {}, action = {}) {
    switch(action.type) {
    case USER_LOGGED_IN:
        return action.user;
    case USER_LOGGED_OUT:
        return {};
    case PASSWORD_RESET:
        return action.user;
    case USER_REGISTERED:
        return action.data;
    case RESET_LINK_REQUESTED:
        return action.data;
    default:
        return state;
    }
}