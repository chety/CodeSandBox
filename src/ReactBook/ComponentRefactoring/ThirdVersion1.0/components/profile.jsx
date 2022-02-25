import React from "react";

export const Profile = props => {
  const renderAddionalFields = (key, label) => {
    return this.props[key] ? (
      <div>
        {label} {key}
      </div>
    ) : null;
  };

  const { imagePath, description } = this.props;
  return (
    <li>
      {imagePath}
      <div className="image-description">{description}</div>
      {renderAddionalFields("email", "Email: ")}
      {renderAddionalFields("twitter", "Twitter: ")}
      {renderAddionalFields("reddit", "Reddit: ")}
    </li>
  );
};
