import React, { Component } from 'react';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ShowEvents from '../ShowEvents/ShowEvents';
import EventItem from '../EventDetail/EventItem';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import CreateEvent from '../CreateEvent/CreateEvent';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path='/' component={Home} />
                    <Route  path='/events/:id' component={EventItem} />
                    <Route exact path='/events' component={ShowEvents} />
                    <Route  path='/event/new' component={CreateEvent} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                </div>
            </Router>
        );
    }
}

export default App;
