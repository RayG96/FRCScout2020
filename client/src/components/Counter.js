import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Counter extends Component {
  state = {
    minWidth: ""
  };

  spanStyle = {
    fontSize: "90%",
    display: "inline-block",
    margin: this.props.margin,
    minWidth: this.props.minWidth,
    maxWidth: this.props.maxWidth,
    fontFamily: "Helvetica, Arial"
    // textAlign: "center"
    // justifyContent: "center"
  };

  refCallback = element => {
    if (element) {
      this.setState({ minWidth: element.getBoundingClientRect().width });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Button
          disabled={this.props.disabled}
          className="btn"
          variant={this.props.disabled ? "outline-danger" : "danger"}
          onClick={this.props.onDecrement}
          size={this.props.size}
          style={{ minWidth: this.state.minWidth }}
        >
          -
        </Button>
        <span style={this.spanStyle}>
          {this.props.label}
          {this.props.colon}
          {this.props.count}
        </span>
        <Button
          ref={this.refCallback}
          style={{
            marginRight: this.props.marginRight
          }}
          disabled={this.props.disabled}
          className="btn"
          variant={this.props.disabled ? "outline-success" : "success"}
          onClick={this.props.onIncrement}
          size={this.props.size}
        >
          +
        </Button>
      </React.Fragment>
    );
  }
}

export default Counter;
