import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createEvent } from '../../actions/events.actions';
import CreateEventForm from '../forms/CreateEventForm';


export class CreateEvent extends React.Component {
    
    // makes call to create event
    submit = (data) =>
        this.props.createEvent(data)
            .then(event => {
                this.props.history.push(`/events/${event.id}`);
            });

    render() {
        document.title = 'Bright Events | Create Event';
        return (
            <div style={{ marginTop: '7em' }}>
                <Container text>
                    <h1>Create Event</h1>
                    <CreateEventForm submit={this.submit}/>
                </Container>
            </div>
        );
    }
}

// typechecking validation
CreateEvent.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }),
    createEvent: PropTypes.func,
    message: PropTypes.string
};

export default connect(null, { createEvent })(CreateEvent);