import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "./item.css";

class Item extends React.Component {
  render() {
    return (
      <div className="main">
        <ItemCounter count={this.props.item} />
        <div
          onClick={() => this.props.increment(this.props.index)}
          style={{
            background: "grey",
            margin: "5px",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <p style={{ color: "white", userSelect: "none" }}>Increment</p>
        </div>
        <div
          onClick={() => this.props.decrement(this.props.index)}
          style={{
            background: "grey",
            margin: "5px",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <p style={{ color: "white", userSelect: "none" }}>Decrement</p>
        </div>
        <div
          onClick={() => this.props.delete(this.props.index)}
          style={{
            background: "red",
            margin: "5px",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <p style={{ color: "white", userSelect: "none" }}>Delete</p>
        </div>
      </div>
    );
  }
}

export default Item;
