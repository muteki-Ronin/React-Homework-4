// CORE
import { Component } from "react";
// COMPONENTS
import { ListItem } from "../listItem/ListItem";
import { Card } from "../card/Card";
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

  clickItem = (index) => {
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
            <ListItem
              key={item.name}
              item={item}
              index={index}
              clickItem={this.clickItem}
            />
          ))}
        </ul>
        {this.state.item && (
          <Card item={this.state.item} itemType={this.state.itemType} />
        )}
      </>
    );
  }
}
