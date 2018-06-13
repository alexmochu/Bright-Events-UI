import React from 'react';
import { Container, Grid, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Sad_Pepe from '../../Sad_Pepe.png';
import './PageNotFound.css';

const PageNotFound = (props) => {

    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns={3} divided>
                <Grid.Row stretched>
                    <Grid.Column width={2}>
                        <h1>Page Not Found</h1>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Image src={Sad_Pepe} className='sad-cat'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br/>
            <Button basic onClick={props.history.goBack} color='orange'>GO BACK</Button>
        </Container>
    );
};

PageNotFound.propTypes = {
    history: PropTypes.shape({
        goBack: PropTypes.func
    })
};

export default PageNotFound;