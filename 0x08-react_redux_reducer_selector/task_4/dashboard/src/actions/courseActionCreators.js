import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
  return dispatch => dispatch({ type: SELECT_COURSE, index });
}

export function unSelectCourse(index) {
  return dispatch => dispatch({ type: UNSELECT_COURSE, index });
}