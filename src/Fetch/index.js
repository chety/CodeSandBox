import { React, Component } from "react";

export default class CoinApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <ul>
        {this.state.data.map(el => (
          <li key={el.id}>
            {el.name} : ${el.price_usd}
          </li>
        ))}
      </ul>
    );
  }

  async componentDidMount() {
    // fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(res =>
    //   res.json().then(data =>
    //     this.setState({
    //       data
    //     })
    //   )
    // );

    try {
      const response = await fetch(
        "https://api.coinmarketcap.com/v1/ticker/?limit=10"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      this.setState({
        data
      });
    } catch (error) {
      console.log("Error occured: Details:", error);
    }
  }
}
