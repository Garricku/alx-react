import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsAread(index) {
  return dispatch => dispatch({ type: MARK_AS_READ, index });
}

export function setNotificationFilter(filter) {
  return dispatch => dispatch({ type: SET_TYPE_FILTER, filter });
}