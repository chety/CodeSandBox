import React from "react";
import PropTypes from "prop-types";
import Profile from "./profile.jsx";

export const ListSecondVersion = props => {
  const { profiles } = this.props;
  return (
    <ul>
      {profiles.map(profile => (
        <Profile {...profile} />
      ))}
    </ul>
  );
};

ListSecondVersion.defaultProps = {
  profiles: []
};

ListSecondVersion.propTyes = {
  profiles: PropTypes.array
};
