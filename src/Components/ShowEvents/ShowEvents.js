import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import EventDetail from '../EventDetail/EventDetail';
import client from '../../client';
import './ShowEvents.css';

document.title = 'Bright Events | Events';

export default class ShowEvents extends React.Component {
   state = {
       events: [],
   };

   componentDidMount() {
       client.get('/events').then(res => {
           console.log(res);
           this.setState({ events: res.data.events });
       });
   }

   render() {
       return(
           <Container>
               <div>
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
       );
   }
}