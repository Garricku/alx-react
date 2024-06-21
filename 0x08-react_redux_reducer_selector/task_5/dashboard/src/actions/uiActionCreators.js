import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

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

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('../../dist/login-success.json')
      .then(response => {
        if (response.ok) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  };
}