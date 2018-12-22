import React from "react";

export default class ComponentLifeCycle extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Hello From Constructor !!!. It works only once.");
    this.state = {
      inputValue: null
    };
  }

  static getDerivedStateFromProps() {
    console.log(
      "Hello From getDrivedStateFromProps. This method always works before render(In older version of react that was componentWillMount)"
    );
  }
  onHandleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  render() {
    console.log("Hello From Render method");
    console.log(`this input value: ${this.state.inputValue}`);
    return (
      <React.Fragment>
        <h3>Introduction To React Component Life Cycles</h3>
        <a
          rel="noopener noreferrer"
          target="_blank"
          title="Cool Article"
          href="https://medium.freecodecamp.org/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030"
        >
          Resource{" "}
        </a>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.onHandleChange(e)}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log(
      "Hello From componentDidMount. It always work for the first time after the mount operation"
    );
  }
  componentDidUpdate() {
    console.log(
      "Hello From componentDidUpdate. It always forks after the update operation."
    );
  }
}
