import uiReducer from './uiReducer';
import { Map } from 'immutable';

describe('UI Reducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState.toJS());
  });

  it('should handle SELECT_COURSE action (no state change)', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });
    const newState = uiReducer(currentState, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(currentState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action (set visibility to true)', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });
    const newState = uiReducer(currentState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should handle LOGIN_SUCCESS action (set isUserLoggedIn to true)', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });
    const newState = uiReducer(currentState, { type: 'LOGIN_SUCCESS' });
    expect(newState.get('isUserLoggedIn')).toBe(true);
  });

  it('should handle LOGIN_FAILURE (set isUserLoggedIn to false)', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });
    const newState = uiReducer(currentState, { type: 'LOGIN_FAILURE' });
    expect(newState.get('isUserLoggedIn')).toBe(false);
    const trueState = uiReducer(newState, { type: 'LOGIN_SUCCESS' });
    const falseState = uiReducer(trueState, { type: 'LOGIN_FAILURE' });
    expect(falseState.get('isUserLoggedIn')).toBe(false);
  });

  it('should handle LOGOUT (set isUserLoggedIn to false)', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map(),
    });
    const newState = uiReducer(currentState, { type: 'LOGOUT' });
    expect(newState.get('isUserLoggedIn')).toBe(false);
  });
});