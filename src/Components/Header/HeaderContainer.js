import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../actions/auth.actions';

// get data from store and provide as props
const mapStateToProps = state=>({
    currentUserId: state.auth.user.sub,
    isAuthenticated: !!state.user.auth_token,
    userName: state.auth.user.username,
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch =>({
    logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);