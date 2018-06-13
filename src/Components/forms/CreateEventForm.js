import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import propTypes from 'prop-types';

import InlineError from '../messages/InlineError';
import { Notifications } from '../messages/Notifications';

class CreateEventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: '',
                description: '',
                location: '',
                category: '',
                time: '',
                date: ''
            },
            errors: {}
        };
    }
    
    componentDidMount() {
        Notifications();
    }
    
// handles form data state change
onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

    
// handles form data submission.
onSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
        this.props
            .submit(this.state.data)
            .catch(err => this.setState({ errors: err.response.data}));
    }
    // this.setState({
    //     data: {
    //         title: '',
    //         description: '',
    //         location: '',
    //         category: '',
    //         time: '',
    //         date: ''
    //     }
    // });
};

handleDismis = () => {
    this.setState({ errors: {} });
}

// validate form data
validate = (data) => {
    const errors = {};
    if (!data.title) errors.title = 'Title can\'t be blank';
    if (!data.description) errors.description = 'Description can\'t be blank';
    if (!data.location) errors.location = 'Location can\'t be blank';
    if (!data.category) errors.category = 'Category can\'t be blank';
    if (!data.date) errors.date = 'Date can\'t be blank';
    if (!data.time) errors.time = 'Time can\'t be blank';
    
    return errors;
}

render() {
    const { data, errors } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="create-event-form">
            { errors.error && (
                <Message negative onDismiss={this.handleDismis}>
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
                    placeholder="Jah9 NBO" 
                    value={data.title} 
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
                    value={data.description} 
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
                    value={data.location} 
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
                    value={data.category} 
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
                    value={data.date} 
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
                    value={data.time} 
                    onChange={this.onChange}
                />
                {errors.time && <InlineError text={errors.time} />}
            </Form.Field>
            <Button ui button color='green' size='large'>Submit</Button>
        </Form>
    );
}
}

// typechecking validation
CreateEventForm.propTypes ={
    submit: propTypes.func
};

export default CreateEventForm;