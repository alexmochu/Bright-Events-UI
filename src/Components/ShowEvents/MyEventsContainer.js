import { connect } from 'react-redux';

import { fetchmyEvents } from '../../actions/events.actions';
import MyEvents from './MyEvents';

// get data from store and provide as props
const mapStatetoProps = state => ({
    events: state.events,
    loading: state.loading,
    deleted: state.event.deleted
});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch => ({
    fetchmyEvents: (id) => dispatch(fetchmyEvents(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(MyEvents);     
