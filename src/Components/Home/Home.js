import React from 'react';
import { Button } from 'semantic-ui-react';
import './Home.css';

function Home() {
    return (
        <div className="index-container center">
            <h1>plan your next event.</h1>
            <Button color="orange">GET STARTED</Button>
        </div>
    );
}

export default Home;