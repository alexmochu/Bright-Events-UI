import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoginRequired from './LoginRequired';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoginRequired />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<LoginRequired />);
        expect(wrapper).toBeDefined();
    });
});