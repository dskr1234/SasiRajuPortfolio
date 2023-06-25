import { Component } from "react";

import Cookies from "js-cookie";

import "./pass.css";

class Pass extends Component {
  state = { name: "", errorMsg: "" };

  getName = (event) => this.setState({ name: event.target.value });

  onClickGetName = () => {
    const { name } = this.state;

    Cookies.set("user_name", name, { expires: 1 });

    if (name.length === 0) {
      this.setState({
        errorMsg: "Please Enter Your Name to Continue!",
      });
    } else {
      this.setState({ errorMsg: "" });
      const { history } = this.props;
      history.replace("/");
    }
  };

  render() {
    const { errorMsg } = this.state;

    return (
      <div className="pass-container">
        <h1 className="welcome-head">Hello , there!</h1>
        <div className="pass-box">
          <div className="input-container">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Name ......"
              id="name"
              className="input-box"
              onChange={this.getName}
            />
          </div>

          <div className="but-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickGetName}
            >
              Click Me to Get You!
            </button>
          </div>
          <p className="text">{errorMsg}</p>
        </div>
      </div>
    );
  }
}

export default Pass;
