import uiReducer from './uiReducer';

describe('UI Reducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle SELECT_COURSE action (no state change)', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(currentState, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(currentState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action (set visibility to true)', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(currentState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(newState.isNotificationDrawerVisible).toBe(true);
  });

  it('should handle LOGIN_SUCCESS action (set isUserLoggedIn to true)', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(currentState, {type: 'LOGIN_SUCCESS'});
    expect(newState.isUserLoggedIn).toBe(true);
  });

  it('should handle LOGIN_FAILURE (set isUserLoggedIn to false)', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(currentState, {type: 'LOGIN_FAILURE'});
    expect(newState.isUserLoggedIn).toBe(false);
    const trueState = uiReducer(newState, {type: 'LOGIN_SUCCESS'});
    const falseState = uiReducer(trueState, {type: 'LOGIN_FAILURE'});
    expect(falseState.isUserLoggedIn).toBe(false);
    });

    it('should handle LOGOUT (set isUserLoggedIn to false)', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    const newState = uiReducer(currentState, {type: 'LOGOUT'});
    expect(newState.isUserLoggedIn).toBe(false);
    });
});