import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
    this.updateSubmitButton();
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
    this.updateSubmitButton();
  };

  updateSubmitButton() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email.trim() !== "" && password.trim() !== "" });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.inputGroup)}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                className={css(styles.input)}
              />
            </div>
            <div className={css(styles.inputGroup)}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                className={css(styles.input)}
              />
            </div>
            <input type="submit" value="OK" disabled={!this.state.enableSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
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