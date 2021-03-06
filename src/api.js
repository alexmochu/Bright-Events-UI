import client from './client';

export default {
    user: {
        login: credentials => client.post('/auth/login', { credentials }).then(res => res.data.user),
        logout: user => client.post('/auth/logout').then(res => res.data.user),
        signup: user => client.post('/auth/register', { user }).then(res => res.data.user)
    }
};
