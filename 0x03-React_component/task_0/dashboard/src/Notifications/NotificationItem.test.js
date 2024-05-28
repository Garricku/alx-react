import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';

describe('NotificationItem', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).tobe(true);
    });

    it('should apply the correct CSS class for default type', () => {
        const wrapper = shallow(<NotificationItem type="default" value="Default Text" />);
        expect(wrapper.hasClass('default')).toBe(true);
      });
    
      it('should apply the correct CSS class for urgent type', () => {
        const wrapper = shallow(<NotificationItem type="urgent" value="Urgent Text" />);
        expect(wrapper.hasClass('urgent')).toBe(true);
      });
})