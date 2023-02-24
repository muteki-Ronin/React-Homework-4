// CORE
import { Component } from "react";
// COMPONENTS
import { Item } from "../item/Item";
// STYLES
import "./style.css";

export class ListItems extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
      itemType: null,
    };
  }

  handleClick = (index) => {
    this.setState({
      item: this.props.state.items[index],
      itemType: this.props.state.itemType,
    });
  };

  render() {
    const { state } = this.props;
    return (
      <>
        <ul className="list-container">
          {state.items.map((item, index) => (
            <li className="list-item" key={item.name} onClick={() => this.handleClick(index)}>
              {item.name}
            </li>
          ))}
        </ul>
        {this.state.item && (
          <Item item={this.state.item} itemType={this.state.itemType} />
        )}
      </>
    );
  }
}
