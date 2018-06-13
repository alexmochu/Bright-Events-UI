import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import CreateEvent from '../CreateEvent/CreateEvent';
import SearchEvents from '../SearchEvents/SearchEvents';
import ProtectedRoute from '../Routes/ProtectedRoute';
import PageNotFound from '../Routes/PageNotFound';
import HeaderContainer from '../Header/HeaderContainer';
import MyEventsContainer from '../ShowEvents/MyEventsContainer';
import ShowEventsContainer from '../ShowEvents/ShowEventsContainer';
import EventContainer from '../EventDetail/EventContainer';
import SignupContainer from '../Signup/SignupContainer';
import LoginContainer from '../Login/LoginContainer';
import EditEventContainer from '../EditEvent/EditEventContainer';
import RsvpEventsContainer from '../ShowEvents/RsvpEventsContainer';
import SubmitEmailContainer from '../ResetPassword/SubmitEmailContainer';
import ResetPasswordContainer from '../ResetPassword/ResetPasswordContainer';


class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/events' component={ShowEventsContainer} />
                    <Route path='/events/:id' component={EventContainer} />
                    <ProtectedRoute path='/event/new' component={CreateEvent} />
                    <Route path='/login' component={LoginContainer} />
                    <Route path='/signup' component={SignupContainer} />
                    <ProtectedRoute path='/rsvp' component={RsvpEventsContainer} />
                    <ProtectedRoute path='/edit/events/:id' component={EditEventContainer} />
                    <ProtectedRoute path='/user/:id/events' exact component={MyEventsContainer} />
                    <Route path='/search/events' component={SearchEvents} />
                    <Route path='/request-password-reset' component={SubmitEmailContainer} />
                    <Route path='/reset-password/token=:token' component={ResetPasswordContainer} />
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
