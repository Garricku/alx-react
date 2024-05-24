import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains Notifications, Header, Login, and Footer components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});