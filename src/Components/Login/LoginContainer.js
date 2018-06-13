import { connect } from 'react-redux';

import Login from './Login';
import { login } from '../../actions/auth.actions';

// get data from store and provide as props
const mapStateToProps = state=>({
    isAuthenticated: !!state.user.auth_token,
    message: state.user.message
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch =>({
    login: (data) => dispatch(login(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);