import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SubmitEmailForm from './SubmitEmailForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<SubmitEmailForm />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<SubmitEmailForm />);
        expect(wrapper).toBeDefined();
    });
});