import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EventDetail from '../EventDetail/EventDetail';
import client from '../../client';

document.title = 'Bright Events | Events';

class RsvpEvents extends React.Component {
   state = {
       events: []
   };

   componentDidMount() {
       const { currentUserId } = this.props;
       let userId = currentUserId?currentUserId:''; 
       client.get(`/user/${userId}/rsvp`).then(res => {
           this.setState({ events: res.data.events });
       });
   }

   render() {
       return(
           <div>
               <header class="rsvp-events-header">
                   <h1 class="center">RSVP'd Events</h1>
               </header>
               <Container>
                   <div style={{ marginTop: '1.5em' }}>
                       {this.state.events.map(event =>
                           <Link
                               to={'/events/' + event.id}
                               key={event.id}>
                               <EventDetail
                                   title={event.title}
                                   description={event.description}
                                   date={event.date}
                                   location={event.location}
                                   category={event.category}
                                   id={event.id}
                               />
                           </Link>
                       )}
                   </div>
               </Container>
           </div>
       );
   }
}

const mapStateToProps = state =>({
    currentUserId: state.auth.user.sub
});

RsvpEvents.propTypes = {
    currentUserId: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(RsvpEvents);