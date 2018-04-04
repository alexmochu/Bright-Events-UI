import React, { Component } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ShowEvents from '../ShowEvents/ShowEvents';
import Login from '../Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route path='/' component={Home} exact />
                    <Route path='/events' component={ShowEvents} />
                    <Route path='/login' component={Login} />
                </div>
            </Router>
        );
    }
}

export default App;
