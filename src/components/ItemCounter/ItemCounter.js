import React from "react";

class ItemCounter extends React.Component {
  render() {
    return this.props.count === 0 ? (
      <div
        style={{
          background: "#e3df62",
          height: "40px",
          width: "50px",
          margin: "5px",
        }}
      >
        <p style={{ textAlign: "center", margin: "5.5px" }}>Zero</p>
      </div>
    ) : (
      <div
        style={{
          background: "#5ed1ff",
          height: "40px",
          width: "50px",
          margin: "5px",
        }}
      >
        <p style={{ color: "white", textAlign: "center", margin: "5.5px" }}>
          {this.props.count}
        </p>
      </div>
    );
  }
}

export default ItemCounter;
