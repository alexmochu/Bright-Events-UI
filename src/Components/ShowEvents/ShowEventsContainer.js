import { connect } from 'react-redux';

import { fetchEvents } from '../../actions/events.actions';
import ShowEvents from './ShowEvents';


const mapStatetoProps = state => ({
    events: state.events,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: ()=>dispatch(fetchEvents())
});

export default connect(mapStatetoProps, mapDispatchToProps)(ShowEvents);     