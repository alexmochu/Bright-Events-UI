import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import removeAuthToken from './removeAuthToken';

Enzyme.configure({ adapter: new Adapter() });

describe('<removeAuthToken />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<removeAuthToken />);
        expect(wrapper).toBeDefined();
    });
}); 