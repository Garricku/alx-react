import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img and an h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});