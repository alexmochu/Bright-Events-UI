import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import MyEvents from './MyEvents';

Enzyme.configure({ adapter: new Adapter() });

describe('<MyEvents />', () => {
    it('renders the page', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <MyEvents />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
    });
});