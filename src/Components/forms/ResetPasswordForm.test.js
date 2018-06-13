import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResetPasswordForm from './ResetPasswordForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<ResetPasswordForm />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<ResetPasswordForm />);
        expect(wrapper).toBeDefined();
    });
});