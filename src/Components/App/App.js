import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import CreateEvent from '../CreateEvent/CreateEvent';
import EditEvent from '../EditEvent/EditEvent';
import MyEventsContainer from '../ShowEvents/MyEventsContainer';
import SearchEvents from '../SearchEvents/SearchEvents';
import ResetPassword from '../ResetPassword/ResetPassword';
import ProtectedRoute from '../Routes/ProtectedRoute';
import ShowEventsContainer from '../ShowEvents/ShowEventsContainer';
import EventContainer from '../EventDetail/EventContainer';
import RsvpEventsContainer from '../ShowEvents/RsvpEventsContainer';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/events' component={ShowEventsContainer} />
                    <Route path='/events/:id' component={EventContainer} />
                    <ProtectedRoute path='/event/new' component={CreateEvent} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <ProtectedRoute path='/rsvp' component={RsvpEventsContainer} />
                    <ProtectedRoute path='/edit/events/:id' component={EditEvent} />
                    <ProtectedRoute path='/user/:id/events' component={MyEventsContainer} />
                    <Route path='/search/events' component={SearchEvents} />
                    <ProtectedRoute path='/reset-password' component={ResetPassword} />
                </div>
            </Router>
        );
    }
}

export default App;
