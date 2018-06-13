import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import EventItem from './EventItem';

Enzyme.configure({ adapter: new Adapter() });

describe('<EventItem />', () => {
    it('renders the page', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EventItem />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
    });

    it('renders Container', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EventItem />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Container').length).toEqual(0);
    });

    it('renders div', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EventItem />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(0);
    });

    it('renders Mesage', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EventItem />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Message').length).toEqual(0);
    });

    it('renders Redirect', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EventItem />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Redirect').length).toEqual(0);
    });
});