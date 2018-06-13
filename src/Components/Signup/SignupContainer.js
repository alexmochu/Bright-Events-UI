import { connect } from 'react-redux';

import Signup from './Signup';
import { signup } from '../../actions/auth.actions';

// get data from store and provide as props
const mapStateToProps = state=>({
    isAuthenticated: !!state.user.auth_token
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch =>({
    signup: (data) => dispatch(signup(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(Signup);