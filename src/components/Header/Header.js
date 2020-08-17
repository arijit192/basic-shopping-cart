import React from "react";
import "./header.css";
import CartIcon from "../../assets/cart.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <p style={{ color: "white", fontSize: "35px", margin: "15px" }}>
            Counter
          </p>
        </div>
        <div>
          <img
            src={CartIcon}
            style={{ position: "fixed", right: "1.6vw", top: "2vw" }}
          />
          <p style={{ position: "absolute", right: "3vw", color: "white" }}>
            {this.props.mainStore.totalItems}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
