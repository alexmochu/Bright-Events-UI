import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import EventItem from '../EventDetail/EventItem';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import CreateEvent from '../CreateEvent/CreateEvent';
import RsvpEvents from '../ShowEvents/RsvpEvents';
import EditEvent from '../EditEvent/EditEvent';
import MyEvents from '../ShowEvents/MyEvents';
import SearchEvents from '../SearchEvents/SearchEvents';
import ResetPassword from '../ResetPassword/ResetPassword';
import ProtectedRoute from '../Routes/ProtectedRoute';
import ShowEventsContainer from '../ShowEvents/ShowEventsContainer';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/events' component={ShowEventsContainer} />
                    <Route path='/events/:id' component={EventItem} />
                    <ProtectedRoute path='/event/new' component={CreateEvent} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <ProtectedRoute path='/rsvp' component={RsvpEvents} />
                    <ProtectedRoute path='/edit/events/:id' component={EditEvent} />
                    <ProtectedRoute path='/user/:id/events' component={MyEvents} />
                    <Route path='/search/events' component={SearchEvents} />
                    <ProtectedRoute path='/reset-password' component={ResetPassword} />
                </div>
            </Router>
        );
    }
}

export default App;
