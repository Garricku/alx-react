import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { normalize } from 'normalizr';
import notificationSchema from '../schema/notifications';

const initialState = Map({
  notifications: [],
  filter: 'DEFAULT',
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
      // Normalize the data using the notification schema
      const normalizedData = normalize(action.data, [notificationSchema]);
      // Merge the normalized data with the existing state
      return state.merge({
        notifications: normalizedData.entities.notifications,
      });

    case 'SET_TYPE_FILTER':
      // Update the value of the filter attribute
      return state.set('filter', action.filter);

    case 'MARK_AS_READ':
      // Update the value of the item in the state using setIn
      return state.setIn(['notifications', action.index, 'isRead'], true);

    default:
      return state;
  }
}