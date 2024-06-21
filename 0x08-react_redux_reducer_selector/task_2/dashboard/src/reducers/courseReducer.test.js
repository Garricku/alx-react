import courseReducer from './courseReducer';

describe('Course Reducer', () => {
  it('should return the initial state (empty array)', () => {
    const initialState = [];
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS action', () => {
    const currentState = [];
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
    expect(newState.every(course => course.isSelected === false)).toBe(true);
  });

  it('should handle SELECT_COURSE action (set isSelected to true)', () => {
    const currentState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: 'SELECT_COURSE', index: 2 };
    const newState = courseReducer(currentState, action);

    // Check if the correct item is selected
    expect(newState[1].isSelected).toBe(true);
  });

  it('should handle UNSELECT_COURSE action (set isSelected to false)', () => {
    const currentState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: 'UNSELECT_COURSE', index: 2 };
    const newState = courseReducer(currentState, action);

    // Check if the correct item is unselected
    expect(newState[1].isSelected).toBe(false);
  });
});