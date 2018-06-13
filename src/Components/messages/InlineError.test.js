import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InlineError from './InlineError';

Enzyme.configure({ adapter: new Adapter() });

describe('<InlineError />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<InlineError />);
        expect(wrapper).toBeDefined();
    });
});