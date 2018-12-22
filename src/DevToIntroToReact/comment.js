import React from "react";
import "./main.css";
import PropTypes from "prop-types";

export default class Comment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: ""
    };
  }
  onHandleChange = event => {
    this.setState({
      currentValue: event.target.value
    });
  };

  render() {
    return (
      <>
        <textarea
          className="form-control"
          ref={this.inputRef}
          onChange={e => this.onHandleChange(e)}
          placeholder="Enter a comment..."
        />
        <small>
          {this.props.maxLength - this.state.currentValue.length}
          {"  "}
          characters remaining
        </small>
      </>
    );
  }
}

Comment.propTypes = {
  maxLength: PropTypes.number,
  name: PropTypes.element.isrequired
};
Comment.defaultProps = {
  maxLength: 140
};
