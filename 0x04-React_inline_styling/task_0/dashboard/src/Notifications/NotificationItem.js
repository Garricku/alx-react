import React from "react";
import { StyleSheet, css } from "aphrodite"; // Import Aphrodite
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            className={css(styles.notificationItem)} // Apply Aphrodite styles
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
            className={css(styles.notificationItem)} // Apply Aphrodite styles
          ></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};

// Define Aphrodite styles
const styles = StyleSheet.create({
  notificationItem: {
    width: "100%",
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
  },
});

export default NotificationItem;