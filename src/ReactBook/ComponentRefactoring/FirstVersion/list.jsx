import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class List extends PureComponent {
  renderList() {
    const { profiles } = this.props;
    return profiles.map(profile => {
      return (
        <li>
          {profile.imagePath}
          <div className="image-description">{profile.description}</div>
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

List.defaultProps = {
  profiles: []
};
List.propTypes = {
  profiles: PropTypes.array
};
