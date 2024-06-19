import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

export function login(email, password) {
  return dispatch => dispatch({ type: LOGIN, user: { email, password } });
}

export function logout() {
  return dispatch => dispatch({ type: LOGOUT });
}

export function displayNotificationDrawer() {
  return dispatch => dispatch({ type: DISPLAY_NOTIFICATION_DRAWER });
}

export function hideNotificationDrawer() {
  return dispatch => dispatch({ type: HIDE_NOTIFICATION_DRAWER });
}