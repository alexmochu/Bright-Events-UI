import { connect } from 'react-redux';

import { fetchmyEvents } from '../../actions/events.actions';
import MyEvents from './MyEvents';


const mapStatetoProps = state => ({
    events: state.events,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    fetchmyEvents: (id) => dispatch(fetchmyEvents(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(MyEvents);     
