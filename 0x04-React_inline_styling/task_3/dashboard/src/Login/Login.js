import React from "react";
import { StyleSheet, css } from "aphrodite"; // Import Aphrodite

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className={css(styles.input)} />
          </div>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className={css(styles.input)} />
          </div>
          <button className={css(styles.button)}>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

// Define Aphrodite styles
const styles = StyleSheet.create({
  appBody: {
    margin: 0,
    padding: "30px",
    height: "250px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    margin: "0 10px",
  },
  button: {
    display: "block",
    margin: "10px auto",
  },
});

export default Login;