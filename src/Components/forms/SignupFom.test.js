import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignupForm from './SignupForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignupForm />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<SignupForm />);
        expect(wrapper).toBeDefined();
    });
});