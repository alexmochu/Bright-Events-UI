import { fetchEvent, fetchGuests, deleteEvent, rsvpEvent, removeRsvp } from '../../actions/events.actions';
import EventItem from './EventItem';
import { connect } from 'react-redux';

// get data from store and provide as props
const mapStateToProps = state=>({
    event: state.event,
    error: state.error,
    loading: state.loading,
    currentUserId: state.auth.user.sub,
    isAuthenticated: !!state.user.auth_token,
    guests: state.events,
    userName: state.auth.user.username,
    rsvpd: state.event.rsvpd
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch =>({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    fetchGuests: (id) => dispatch(fetchGuests(id)),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    rsvpEvent: (id, username) => dispatch(rsvpEvent(id, username)),
    removeRsvp: (id, username) => dispatch(removeRsvp(id, username)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventItem);