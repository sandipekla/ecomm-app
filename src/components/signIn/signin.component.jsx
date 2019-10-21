import React, { Component } from "react";

import FormInput from "../common/form-input/form-input.component";

import "./signin.styles.scss";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    //TODO Sign in user

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="signin">
        <h2>I have an account!</h2>
        <span>Sign in with existing account</span>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            className="custom-input"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            label="password"
            className="custom-input"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <input className="submit-btn" type="submit" value="Sign in"></input>
        </form>
      </div>
    );
  }
}

export default Signin;
