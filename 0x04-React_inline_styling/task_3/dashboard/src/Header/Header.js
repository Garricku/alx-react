import React from "react";
import { StyleSheet, css } from "aphrodite"; // Import Aphrodite
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <>
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.appTitle)}>School dashboard</h1>
      </div>
    </>
  );
}

// Define Aphrodite styles
const styles = StyleSheet.create({
  appHeader: {
    display: "inline-flex",
    borderBottom: ".2rem solid rgb(219, 44, 70)",
    width: "100%",
  },
  appLogo: {
    padding: "10px",
    width: "170px",
    height: "170px",
    float: "left",
  },
  appTitle: {
    color: "rgb(219, 44, 70)",
    textAlign: "left",
    alignSelf: "center",
  },
});

export default Header;