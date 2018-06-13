import { editEvent } from '../../actions/events.actions';
import { connect } from 'react-redux';

import EditEvent from './EditEvent';

// get data from store and provide as props
const mapStateToProps = state=>({

});

/* 
binds action creators to dispatch and 
provides then as props 
*/
const mapDispatchToProps = dispatch =>({
    editEvent: (id, data) => dispatch(editEvent(id, data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);