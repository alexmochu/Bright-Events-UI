import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import EditEvent from './EditEvent';

Enzyme.configure({ adapter: new Adapter() });

describe('<EditEvent />', () => {
    it('renders the page', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EditEvent />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
    });

    it('renderes div', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EditEvent />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div').length).toEqual(0);
    });

    it('renderes h1', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EditEvent />
            </BrowserRouter>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('h1').length).toEqual(0);
    });
});