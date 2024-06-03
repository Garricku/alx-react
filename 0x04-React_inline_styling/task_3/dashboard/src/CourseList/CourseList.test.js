import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct number of rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("tbody").children()).toHaveLength(listCourses.length);
  });

  it("renders the correct course names and credits", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    listCourses.forEach((course, index) => {
      const row = wrapper.find(CourseListRow).at(index);
      expect(row.prop("textFirstCell")).toEqual(course.name);
      expect(row.prop("textSecondCell")).toEqual(course.credit);
    });
  });
});