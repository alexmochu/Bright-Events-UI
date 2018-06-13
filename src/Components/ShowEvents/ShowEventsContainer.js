import { connect } from 'react-redux';

import { fetchEvents, messageCleared } from '../../actions/events.actions';
import ShowEvents from './ShowEvents';


// get data from store and provide as props
const mapStatetoProps = state => ({
    events: state.events,
    loading: state.loading,
    error: state.error,
    message: state.user.message
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    messageCleared: () => dispatch(messageCleared())
});

export default connect(mapStatetoProps, mapDispatchToProps)(ShowEvents);