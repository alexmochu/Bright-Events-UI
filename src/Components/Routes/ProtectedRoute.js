import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
    />
);

// typechecking validation
ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

// get data from store and provide as props
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.auth_token,
    };
}

// Connects a React component to a Redux store
export default connect(mapStateToProps)(ProtectedRoute);
