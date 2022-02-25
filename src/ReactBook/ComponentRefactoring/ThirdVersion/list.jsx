import React from "react";
import PropTypes from "prop-types";
import Profile from "./profile.jsx";

export const ListThirdVersion = props => {
  const { items, itemRenderer } = props;
  return <ul>{items.map((item, index) => itemRenderer(item, index))}</ul>;
};

ListThirdVersion.defaultProps = {
  items: []
};

ListThirdVersion.propTyes = {
  items: PropTypes.array,
  itemRenderer: PropTypes.func.isRequired
};
