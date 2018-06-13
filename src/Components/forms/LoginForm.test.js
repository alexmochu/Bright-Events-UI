import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoginForm from './LoginForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoginForm />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toBeDefined();
    });
    
});