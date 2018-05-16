import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import InlineError from '../messages/InlineError';
let titleInput;
class EditEventForm extends React.Component {
    state = {
        data: {
            title: '',
            description: '',
            location: '',
            category: '',
            date: '',
            time: ''
        },
        loading: false,
        errors: {}
    }


onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });
    
componentWillMount = () => {
    this.setState({data:this.props.event});
}
onSubmit = (event) => {
    event.preventDefault();
    this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data, loading: false }));
};

render() {
    const { data, errors, loading } = this.state;
    const { event } = this.props;
    return (
        <Form onSubmit={this.onSubmit} className="Edit-event-form" loading={ loading }>
            { errors.error && (
                <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.error}</p>
                </Message>
            )}
            <Form.Field error={!!errors.title} required>
                <label htmlFor="title">Event Title</label>
                <input 
                    type="text"
                    id="title" 
                    name="title" 
                    placeholder="Jah9 Nairobi Concert" 
                    defaultValue={event.title}
                    onChange={this.onChange}
                />
                {errors.title && <InlineError text={errors.title} />}
            </Form.Field>
            <Form.Field error={!!errors.description} required>
                <label htmlFor="description">Event Description</label>
                <input  
                    type="text"
                    id="description" 
                    name="description" 
                    placeholder="Jah9’s words are a reflection of the life she has constructed. Considered a..." 
                    defaultValue={event.description}
                    onChange={this.onChange}
                />
                {errors.description && <InlineError text={errors.description} />}
            </Form.Field>
            <Form.Field error={!!errors.location} required>
                <label htmlFor="location">Event Location</label>
                <input 
                    type="text"
                    id="location" 
                    name="location" 
                    placeholder="Alchemist Bar" 
                    defaultValue={event.location}
                    onChange={this.onChange}
                />
                {errors.location && <InlineError text={errors.location} />}
            </Form.Field>
            <Form.Field error={!!errors.category} required>
                <label htmlFor="category">Event Category</label>
                <input 
                    type="text"
                    id="category" 
                    name="category" 
                    placeholder="I & I Vibration" 
                    defaultValue={event.category}
                    onChange={this.onChange}
                />
                {errors.category && <InlineError text={errors.category} />}
            </Form.Field>
            <Form.Field error={!!errors.date} required>
                <label htmlFor="date">Event Date</label>
                <input 
                    type="date"
                    id="date" 
                    name="date" 
                    defaultValue={event.date}
                    onChange={this.onChange}
                />
                {errors.date && <InlineError text={errors.date} />}
            </Form.Field>
            <Form.Field error={!!errors.time} required>
                <label htmlFor="date">Event Time</label>
                <input 
                    type="text"
                    id="time" 
                    name="time" 
                    placeholder="6:00 PM - 6:00 AM"
                    defaultValue={event.time}
                    onChange={this.onChange}
                />
                {errors.time && <InlineError text={errors.time} />}
            </Form.Field>
            <Button ui button color='green'>Submit</Button>
        </Form>
    );
}
}

EditEventForm.propTypes = {
    submit: PropTypes.func.isRequired,
    match: PropTypes.func.isRequired,
    event: PropTypes.object
};

export default EditEventForm;