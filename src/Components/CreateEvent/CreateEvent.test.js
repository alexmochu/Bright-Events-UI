import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CreateEvent } from './CreateEvent';

Enzyme.configure({ adapter: new Adapter() });

describe('<CreateEvent />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
    });

    it('renderes 5 divs', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renderes a container', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Container').length).toEqual(1);
    });

    it('renders Container', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Container').length).toEqual(1);
    });

    it('renders div', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders h1', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('h1').length).toEqual(1);
    });

    it('renders Mesage', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Message').length).toEqual(0);
    });

    it('renders Redirect', () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Redirect').length).toEqual(0);
    });
});