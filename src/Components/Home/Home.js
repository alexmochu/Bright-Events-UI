import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './Home.css';

function Home() {
    document.title = 'Bright Events | Home';
    return (
        <div className="index-container center">
            <h1>plan your next event.</h1>
            <a href='/event/new'>
                <Button animated color="orange">
                    <Button.Content visible>GET STARTED</Button.Content>
                    <Button.Content hidden>
                        <Icon name='right arrow' />
                    </Button.Content>
                </Button>
            </a>
        </div>
    );
}

export default Home;