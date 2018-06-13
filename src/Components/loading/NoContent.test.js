import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoContent from './NoContent';

Enzyme.configure({ adapter: new Adapter() });

describe('<NoContent />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<NoContent />);
        expect(wrapper).toBeDefined();
    });
});