import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite"; // Import Aphrodite

import BodySection from "./BodySection";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

// Define Aphrodite styles
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px", // Set the desired margin
  },
});

export default BodySectionWithMarginBottom;