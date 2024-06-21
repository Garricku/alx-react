import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  it('markAsAread creates the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index
    };
    expect(markAsAread(index)).toEqual(expectedAction);
  });

  it('setNotificationFilter creates the correct action for default filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});