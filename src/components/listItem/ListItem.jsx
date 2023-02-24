// CORE
import { Component } from "react";
// STYLES
import "./style.css";

export class ListItem extends Component {
  handleClick = () => {
    this.props.clickItem(this.props.index);
  };

  render() {
    return (
      <li className="list-item" onClick={this.handleClick}>
        {this.props.item.name}
      </li>
    );
  }
}
