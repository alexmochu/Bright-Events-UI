import React from 'react';
import { Container, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TextTruncate from 'react-text-truncate';
import { Link }  from 'react-router-dom';
import './EventDetail.css';
var hdate = require('human-date');


document.title = 'Bright Events | Event';

const EventDetail = (props)=>{
    return(
        <Container text>
            <div className='event-detail'>
                <br/>
                <Card fluid>
                    <Card.Content>
                        <Card.Header content={props.title}/>
                        <Card.Meta content={hdate.prettyPrint(props.date)} />
                        <p className="event-description">
                            <TextTruncate
                                line={2}
                                truncateText="…"
                                text={props.description}
                                textTruncateChild={<Link to={'/events/' + props.id} className='orange-a'>Read on</Link>}
                            />
                        </p>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        {props.guests} Attending
                    </Card.Content>
                </Card> 
            </div>
        </Container>
    );
};

// typechecking validation
EventDetail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    guests: PropTypes.string,
    id: PropTypes.number
};

export default EventDetail;