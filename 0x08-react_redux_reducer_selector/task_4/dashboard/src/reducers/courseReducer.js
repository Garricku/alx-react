import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { normalize } from 'normalizr';
import courseSchema from '../schema/courses';

const initialState = Map({
  notifications: [],
  filter: 'DEFAULT',
});

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COURSE_SUCCESS':
      // Normalize the data using the course schema
      const normalizedData = normalize(action.data, [courseSchema]);
      // Merge the normalized data with the existing state
      return state.merge({
        notifications: normalizedData.entities.courses,
      });

    case 'SELECT_COURSE':
    case 'UNSELECT_COURSE':
      // Update the value of the course item using setIn
      return state.setIn(['notifications', action.index, 'isSelected'], action.type === 'SELECT_COURSE');

    default:
      return state;
  }
}