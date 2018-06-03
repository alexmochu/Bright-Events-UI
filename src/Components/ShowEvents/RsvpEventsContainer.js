import { connect } from 'react-redux';

import { fetchRsvpEvents } from '../../actions/events.actions';
import RsvpEvents from './RsvpEvents';


const mapStatetoProps = state => ({
    events: state.events,
    loading: state.loading,
    error: state.error,
    currentUserId: state.auth.user.sub
});

const mapDispatchToProps = dispatch => ({
    fetchRsvpEvents: (id) => dispatch(fetchRsvpEvents(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(RsvpEvents);     
