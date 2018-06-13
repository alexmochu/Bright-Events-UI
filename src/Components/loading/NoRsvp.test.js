import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoRsvp from './NoRsvp';

Enzyme.configure({ adapter: new Adapter() });

describe('<NoRsvp />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<NoRsvp />);
        expect(wrapper).toBeDefined();
    });
});