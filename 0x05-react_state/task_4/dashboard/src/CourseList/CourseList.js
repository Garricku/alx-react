import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  table: {
    marginTop: "2em",
    width: "100%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
    marginBottom: "15em",
    marginLeft: "auto",
    marginRight: "auto",
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },
  td: {
    width: "80%",
  },
  tr: {
    ":nth-child(2)": {
      textAlign: "left",
    },
  },
});

export default CourseList;