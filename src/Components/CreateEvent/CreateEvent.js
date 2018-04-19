import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createEvent } from '../../actions/events';
import CreateEventForm from '../forms/CreateEventForm';


class CreateEvent extends React.Component {
    submit = (data) =>
        this.props.createEvent(data).then(() => this.props.history.push('/events'));
    
    render() {
        document.title = 'Bright Events | Create Event';
        return (
            <div>
                <Container>
                    <h1>Create Event</h1>
                    <CreateEventForm submit={this.submit}/>
                </Container>
            </div>
        );
    }
}

CreateEvent.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    createEvent: PropTypes.func.isRequired
};

export default connect(null, { createEvent })(CreateEvent);