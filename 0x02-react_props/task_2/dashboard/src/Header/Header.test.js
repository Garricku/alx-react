import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img and an h1 tag', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img')).toHaveLength(1);
  expect(wrapper.find('h1')).toHaveLength(1);
  });
});

