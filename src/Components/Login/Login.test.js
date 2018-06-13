import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
    });

    it('renders Container', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Container').length).toEqual(1);
    });

    it('renders div', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders h1', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('h1').length).toEqual(1);
    });

    it('renders Mesage', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Message').length).toEqual(0);
    });

    it('renders Redirect', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Redirect').length).toEqual(0);
    });
});