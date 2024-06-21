import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Action Creators', () => {
  it('selectCourse returns the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it('unSelectCourse returns the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });
});