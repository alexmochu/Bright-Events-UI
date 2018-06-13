import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import  Home  from './Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toBeDefined();
    });
});