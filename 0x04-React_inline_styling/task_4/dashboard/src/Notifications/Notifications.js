import React, { Component } from "react";
import { StyleSheet, css, keyframes } from "aphrodite"; // Import Aphrodite
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
            <ul className={css(styles.notificationList)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {this.props.listNotifications.map((val) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={this.markAsRead}
                  id={val.id}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

// Define Aphrodite styles
const bounce = keyframes({
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(0)" },
});

const fadeIn = keyframes({
  from: { opacity: 0.5 },
  to: { opacity: 1 },
});

const styles = StyleSheet.create({
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    ":hover": {
      animation: `${bounce} 0.5s alternate 3`,
    },
  },
  notifications: {
    padding: "10px",
    border: ".1rem solid rgb(219, 44, 70)",
    borderStyle: "dashed",
  },
  closeButton: {
    color: "#3a3a3a",
    fontWeight: "bold",
    background: "none",
    border: "none",
    fontSize: "15px",
    position: "absolute",
    right: "3px",
    top: "3px",
    cursor: "pointer",
    outline: "none",
  },
  notificationList: {
    padding: 0,
    listStyle: "none",
    fontSize: "20px",
    animation: `${fadeIn} 1s`,
  },
});

export default Notifications;