import React from "react";

function LikeIcon() {
  return (
    <div>
      <span className="fa-stack fa-sm">
        <i className="fa fa-circle fa-stack-2x blue-icon" />
        <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
      </span>
    </div>
  );
}

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleVisible: false
    };
  }

  onHandleClick = () => {
    this.setState(prevState => ({
      isToggleVisible: !prevState.isToggleVisible
    }));
  };

  render() {
    const { isToggleVisible } = this.state;
    return (
      <div>
        {/* Include the LikeIcon subcomponent within the Like component*/}
        {isToggleVisible && <LikeIcon />}
        <hr />
        <div>
          <button type="button" onClick={this.onHandleClick}>
            <i
              className="fa fa-thumbs-o-up fa-4 align-middle"
              aria-hidden="true"
            />
            &nbsp;
            <span className="align-middle">
              {isToggleVisible ? "Liked" : "Like"}
            </span>
          </button>
        </div>
      </div>
    );
  }
}
