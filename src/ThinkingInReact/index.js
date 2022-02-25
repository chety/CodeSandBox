import React, { PureComponent } from "react";

const data = [
  {
    id: 1,
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    id: 2,
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    id: 3,
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    id: 4,
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    id: 5,
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
export class Lister extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <h5>Name</h5>
          <h5>Price</h5>
        </div>
        <ul>
          {data.map(d => (
            <li key={d.id}>{d.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lister;
