import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreateEventForm from './CreateEventForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<CreateEventForm />', () => {
    it('renders the page', () => {
        const wrapper = shallow(<CreateEventForm />);
        expect(wrapper).toBeDefined();
    });

    it('renders Button', () => {
        const wrapper = shallow(<CreateEventForm />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Button').length).toEqual(1);
    });

    it('renders input', () => {
        const wrapper = shallow(<CreateEventForm />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('input').length).toEqual(6);
    });

    it('renders Mesage', () => {
        const wrapper = shallow(<CreateEventForm />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Message').length).toEqual(0);
    });

    it('renders Redirect', () => {
        const wrapper = shallow(<CreateEventForm />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Redirect').length).toEqual(0);
    });
});