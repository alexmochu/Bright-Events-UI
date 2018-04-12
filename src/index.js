import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';


const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.JWT) {
    const user = { auth_token: localStorage.JWT };
    store.dispatch(userLoggedIn(user));
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
