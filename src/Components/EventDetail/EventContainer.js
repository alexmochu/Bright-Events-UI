import { fetchEvent, fetchGuests, deleteEvent, rsvpEvent, removeRsvp } from '../../actions/events.actions';
import EventItem from './EventItem';
import { connect } from 'react-redux';

const mapStateToProps = state=>({
    event: state.event,
    loading: state.loading,
    currentUserId: state.auth.user.sub,
    isAuthenticated: !!state.user.auth_token,
    guests: state.events
});

const mapDispatchToProps = dispatch =>({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    fetchGuests: (id) => dispatch(fetchGuests(id)),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    rsvpEvent: (id) => dispatch(rsvpEvent(id)),
    removeRsvp: (id) => dispatch(removeRsvp(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(EventItem);