import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import RsvpEvents from './RsvpEvents';

Enzyme.configure({ adapter: new Adapter() });

describe('<RsvpEvents />', () => {
    it('renders the page', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <RsvpEvents />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
    });
});