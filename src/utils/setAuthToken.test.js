import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import setAuthToken from './setAuthToken';

Enzyme.configure({ adapter: new Adapter() });

describe('<setAuthToken />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<setAuthToken />);
        expect(wrapper).toBeDefined();
    });
});