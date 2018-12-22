import React from "react";

export default class Status extends React.Component {
  render() {
    return (
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-10 profile-row">
                <div className="row">
                  <a href="#">The Zen of Programming</a>
                </div>
                <div class="row">
                  <small className="post-time">10 mins</small>
                </div>
              </div>
            </div>
          </div>
          <p>Hello world!</p>
          <div className="card-footer text-muted" />
        </div>
      </div>
    );
  }
}
