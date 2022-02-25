import React, { Component } from "react";

export class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [
        {
          id: "a",
          value: "apple"
        },
        {
          id: "b",
          value: "banana"
        },
        {
          id: "w",
          value: "watermelon"
        },
        {
          id: "g",
          value: "grape"
        },
        {
          id: "o",
          value: "orange"
        },
        {
          id: "p",
          value: "pineapple"
        }
      ]
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.shuffleArray(this.state.allItems),
      4000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  valueChanged = (element) => (event) => {
    const newValue = event.target.value;
    const newItems = this.state.allItems.map((item) => ({
      ...item,
      value: element.id === item.id ? newValue : item.value
    }));
    console.log(newValue);
    console.table(newItems);
    this.setState({ allItems: newItems });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Items without Keys</h1>
        {this.state.allItems.map((element) => {
          return (
            <div style={{ display: "block" }}>
              <input
                value={element.value}
                onChange={this.valueChanged(element)}
              />
            </div>
          );
        })}
        <br />
        <h1>Items with index Keys</h1>
        {this.state.allItems.map((element, index) => {
          return (
            <div style={{ display: "block" }}>
              <input
                key={index}
                value={element.value}
                onChange={this.valueChanged(element)}
              />
            </div>
          );
        })}
        <br />
        <h1>Items with Unique Keys</h1>
        {this.state.allItems.map((element) => {
          return (
            <div style={{ display: "block" }}>
              <input
                key={element.id}
                value={element.value}
                onChange={this.valueChanged(element)}
              />
            </div>
          );
        })}
      </div>
    );
  }

  shuffleArray(array) {
    debugger;
    const lastIndex = array.length - 1;
    for (let i = 0; i < array.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[lastIndex], array[randomIndex]] = [
        array[randomIndex],
        array[lastIndex]
      ];
    }
    this.setState({
      allItems: array
    });
  }
}
