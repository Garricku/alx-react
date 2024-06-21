import courseReducer from './courseReducer';
import { Map } from 'immutable';

describe('Course Reducer', () => {
  it('should return the initial state (empty notifications array and default filter)', () => {
    const initialState = Map({
      notifications: [],
      filter: 'DEFAULT',
    });
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS action', () => {
    const currentState = Map({
      notifications: [],
      filter: 'DEFAULT',
    });
    const action = {
      type: 'FETCH_COURSE_SUCCESS',
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const newState = courseReducer(currentState, action);

    // Check if isSelected is set to false for every item
    expect(newState.get('notifications').every(course => course.get('isSelected') === false)).toBe(true);
  });

  it('should handle SELECT_COURSE action (set isSelected to true)', () => {
    const currentState = Map({
      notifications: [
        Map({ id: 1, isSelected: false, name: 'ES6', credit: 60 }),
        Map({ id: 2, isSelected: false, name: 'Webpack', credit: 20 }),
        Map({ id: 3, isSelected: false, name: 'React', credit: 40 }),
      ],
      filter: 'DEFAULT',
    });
    const action = { type: 'SELECT_COURSE', index: 2 };
    const newState = courseReducer(currentState, action);

    // Check if the correct item is selected
    expect(newState.getIn(['notifications', 1, 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE action (set isSelected to false)', () => {
    const currentState = Map({
      notifications: [
        Map({ id: 1, isSelected: false, name: 'ES6', credit: 60 }),
        Map({ id: 2, isSelected: true, name: 'Webpack', credit: 20 }),
        Map({ id: 3, isSelected: false, name: 'React', credit: 40 }),
      ],
      filter: 'DEFAULT',
    });
    const action = { type: 'UNSELECT_COURSE', index: 2 };
    const newState = courseReducer(currentState, action);

    // Check if the correct item is unselected
    expect(newState.getIn(['notifications', 1, 'isSelected'])).toBe(false);
  });
});