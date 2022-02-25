import React from "react";
import Profile from "./Profile";
import PropTypes from "prop-types";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          let newProps = Object.assign({ key: index }, item);
          return React.createElement(this.props.itemRenderer, newProps);
        })}
      </ul>
    );
  }
}

List.propTypes = { itemRenderer: PropTypes.func };
List.defaultProps = { items: [], itemRenderer: Profile };
export default List;
