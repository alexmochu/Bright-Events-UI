import { connect } from 'react-redux';

import { fetchRsvpEvents } from '../../actions/events.actions';
import RsvpEvents from './RsvpEvents';

// get data from store and provide as props
const mapStatetoProps = state => ({
    events: state.events,
    loading: state.loading,
    error: state.error,
    currentUserId: state.auth.user.sub
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
    fetchRsvpEvents: (id) => dispatch(fetchRsvpEvents(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(RsvpEvents);     
