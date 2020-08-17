import React from "react";

import "./app.css";

//Import Components
import Head from "./components/Header/Header";
import Item from "./components/Item/Item";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCount: [0, 0, 0, 0],
      totalItems: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.delete = this.delete.bind(this);
  }
  increment(index) {
    this.setState((state) => {
      const temp = [...state.itemCount];
      temp[index] += 1;
      var total = 0;
      for (var i = 0; i < temp.length; i++) {
        total += temp[i];
      }
      return {
        itemCount: temp,
        totalItems: total,
      };
    });
  }
  decrement(index) {
    this.setState((state) => {
      const temp = [...state.itemCount];
      if (temp[index] === 0) {
      } else {
        temp[index] -= 1;
      }
      var total = 0;
      for (var i = 0; i < temp.length; i++) {
        total += temp[i];
      }
      return {
        itemCount: temp,
        totalItems: total,
      };
    });
  }
  delete(index) {
    this.setState((state) => {
      const temp = [...state.itemCount];
      temp.splice(index, 1);
      var total = 0;
      for (var i = 0; i < temp.length; i++) {
        total += temp[i];
      }
      return {
        itemCount: temp,
        totalItems: total,
      };
    });
  }
  render() {
    return (
      <>
        <Head mainStore={this.state} />
        {this.state.itemCount.map((item, index) => (
          <Item
            item={item}
            index={index}
            increment={this.increment}
            decrement={this.decrement}
            delete={this.delete}
            main={this.state}
          />
        ))}
      </>
    );
  }
}

export default App;
