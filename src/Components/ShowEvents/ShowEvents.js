import React from 'react';
import { Container, Card } from 'semantic-ui-react';

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
                       <Card key={event.id}>
                           <Card.Content className='event-title' header={event.title} />
                           <Card.Content description={event.description} />
                           <Card.Content extra>
                               When: {event.date} | Where: {event.location}
                           </Card.Content>
                       </Card>
                   )}
               </div>
           </Container>
       );
   }
}