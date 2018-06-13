import { connect } from 'react-redux';

import SubmitEmail from './SubmitEmail';
import { requestLink } from '../../actions/auth.actions';

const mapStatetoProps = state => ({
    message: state.user.message
});

const mapDispatchtoProps = dispatch => ({
    requestLink: (data) => dispatch(requestLink(data))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(SubmitEmail);