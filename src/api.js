import client from './client';

export default {
    user: {
        login: (credentials) => client.post('/api/v1/auth/login', { credentials }).then(res => res.data.user),
        signup: user => client.post('/api/v1/auth/register', { user }).then(res => res.data.user),
    }
};
