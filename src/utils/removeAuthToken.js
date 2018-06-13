import jwt from 'jsonwebtoken';

export const isTokenExpired = token => {
    const currentTime = new Date() / 1000;
    if(jwt.decode(token).exp < currentTime){
        localStorage.removeItem('JWT');
        return true;
    }
    return false;
};