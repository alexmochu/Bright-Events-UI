import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SubmitEmail from './SubmitEmail';

Enzyme.configure({ adapter: new Adapter() });

describe('<SubmitEmail />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<SubmitEmail />);
        expect(wrapper).toBeDefined();
    });

    it('renders Container', () => {
        const wrapper = shallow(<SubmitEmail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Container').length).toEqual(1);
    });

    it('renders div', () => {
        const wrapper = shallow(<SubmitEmail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders h1', () => {
        const wrapper = shallow(<SubmitEmail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('h3').length).toEqual(1);
    });

    it('renders Mesage', () => {
        const wrapper = shallow(<SubmitEmail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Message').length).toEqual(0);
    });

    it('renders Redirect', () => {
        const wrapper = shallow(<SubmitEmail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Redirect').length).toEqual(0);
    });
});