import notificationReducer from './notificationReducer';

describe('Notification Reducer', () => {
  it('should return the initial state (empty notifications array and default filter)', () => {
    const initialState = {
      notifications: [],
      filter: 'DEFAULT',
    };
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const currentState = {
      notifications: [],
      filter: 'DEFAULT',
    };
    const action = {
      type: 'FETCH_NOTIFICATIONS_SUCCESS',
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const newState = notificationReducer(currentState, action);

    // Check if isRead is set to false for every item
    expect(newState.notifications.every(notification => notification.isRead === false)).toBe(true);
  });

  it('should handle MARK_AS_READ action (set isRead to true)', () => {
    const currentState = {
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      filter: 'DEFAULT',
    };
    const action = { type: 'MARK_AS_READ', index: 2 };
    const newState = notificationReducer(currentState, action);

    // Check if the correct item is marked as read
    expect(newState.notifications[1].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER action (update filter)', () => {
    const currentState = {
      notifications: [],
      filter: 'DEFAULT',
    };
    const action = { type: 'SET_TYPE_FILTER', filter: 'URGENT' };
    const newState = notificationReducer(currentState, action);

    // Check if the filter is updated correctly
    expect(newState.filter).toBe('URGENT');
  });
});