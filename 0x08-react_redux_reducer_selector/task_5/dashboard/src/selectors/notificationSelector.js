import { createSelector } from 'reselect';

// Selector to get the filter type
export const filterTypeSelected = state => state.get('filter');

// Selector to get the notifications in a Map format
export const getNotifications = state => state.get('notifications');

// Selector to get unread notifications in a Map format
export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications => notifications.filter(notification => !notification.get('isRead'))
);