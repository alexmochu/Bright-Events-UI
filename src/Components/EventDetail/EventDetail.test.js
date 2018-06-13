import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EventDetail from './EventDetail';

Enzyme.configure({ adapter: new Adapter() });

describe('<EventDetail />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
    });

    it('renders divs', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders divs', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Container').length).toEqual(1);
    });

    it('renders Container', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Container').length).toEqual(1);
    });

    it('renders div', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders h1', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('h1').length).toEqual(0);
    });

    it('renders Mesage', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Message').length).toEqual(0);
    });

    it('renders Redirect', () => {
        const wrapper = shallow(<EventDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Redirect').length).toEqual(0);
    });
});