import { connect } from 'react-redux';

import { resetPassword } from '../../actions/auth.actions';
import ResetPassword from './ResetPassword';

const mapStatetoProps = state => ({ 
    message: state.user.message
});

const mapDisaptchtoProps = dispatch => ({
    resetPassword: (data, token) => dispatch(resetPassword(data, token))
});

export default  connect(mapStatetoProps, mapDisaptchtoProps)(ResetPassword);
    