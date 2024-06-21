import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COURSE_SUCCESS':
      // Set isSelected to false for every item in the data
      return action.data.map(course => ({ ...course, isSelected: false }));
    case 'SELECT_COURSE':
      // Update the selected course
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );
    case 'UNSELECT_COURSE':
      // Update the unselected course
      return state.map(course =>
        course.id === action.index ? { ...course, isSelected: false } : course
      );
    default:
      return state;
  }
}