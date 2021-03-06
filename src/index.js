import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import jwt from 'jsonwebtoken';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import rootReducer from './rootReducer';
import { userLoggedIn, setCurrentUser } from './actions/auth.actions';
import setAuthToken from './utils/setAuthToken';
// import { isTokenExpired }  from './utils/removeAuthToken';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from './middlewares/logger.middleware';

// redux store
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk,logger))
);

// set current_user & send JWT along with requests
if (localStorage.JWT) {
    const user = { auth_token: localStorage.JWT };
    setAuthToken(localStorage.JWT);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.JWT)));
    store.dispatch(userLoggedIn(user));
};

ReactDOM.render(
    /* <Provider> gives all it's children access to the 
    store via the connect() method. */
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
