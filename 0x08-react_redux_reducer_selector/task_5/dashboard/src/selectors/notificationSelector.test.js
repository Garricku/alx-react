import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const initialState = Map({
    notifications: [
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 2, isRead: true, type: 'urgent', value: 'New resume available' }),
      Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
    ],
    filter: 'DEFAULT',
  });

  it('should select the filter type', () => {
    expect(filterTypeSelected(initialState)).toBe('DEFAULT');
  });

  it('should select the notifications', () => {
    const notifications = getNotifications(initialState);
    expect(notifications.size).toBe(3);
    expect(notifications.getIn([0, 'value'])).toBe('New course available');
  });

  it('should select the unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.size).toBe(2);
    expect(unreadNotifications.getIn([0, 'value'])).toBe('New course available');
  });
});