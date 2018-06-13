import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link }  from 'react-router-dom';

import './Home.css';

function Home() {
    document.title = 'Bright Events | Home';
    return (
        <div className="index-container center">
            <h1>plan your next event.</h1>
            <Link to='/event/new'>
                <Button animated color="orange">
                    <Button.Content visible>GET STARTED</Button.Content>
                    <Button.Content hidden>
                        <Icon name='right arrow' />
                    </Button.Content>
                </Button>
            </Link>
        </div>
    );
}

export default Home;