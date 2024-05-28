import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; 

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  }); 
  it('renders the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
  });
});