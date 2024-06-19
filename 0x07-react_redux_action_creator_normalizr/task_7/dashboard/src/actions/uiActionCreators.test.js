import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

describe('UI Action Creators', () => {
  it('login creates the correct action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout creates the correct action', () => {
    const expectedAction = { type: LOGOUT };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer creates the correct action', () => {
    const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer creates the correct action', () => {
    const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when login succeeds', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { user: { email: 'test@example.com', password: 'password' } },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when login fails', () => {
    fetchMock.getOnce('/login-success.json', 400);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});