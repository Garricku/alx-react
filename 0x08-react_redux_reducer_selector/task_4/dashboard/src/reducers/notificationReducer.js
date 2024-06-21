import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/courseActionTypes';

const initialState = {
    notifications: [],
    filter: 'DEFAULT',
  };
  
  export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_NOTIFICATIONS_SUCCESS':
        // Set isRead to false for every item in the data
        const updatedNotifications = action.data.map(notification => ({
          ...notification,
          isRead: false,
        }));
        return { ...state, notifications: updatedNotifications };
      case 'MARK_AS_READ':
        // Mark the correct notification as read
        const markedNotifications = state.notifications.map(notification =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        );
        return { ...state, notifications: markedNotifications };
      case 'SET_TYPE_FILTER':
        return { ...state, filter: action.filter };
      default:
        return state;
    }
  }