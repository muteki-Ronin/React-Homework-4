// CORE
import { Component } from "react";
// COMPONENTS
// import { Item } from "../item/Item";

// STYLES

export class ListItems extends Component {
  constructor() {
    super();
    this.state = {
      item: null,
    };
  }

  requestPeople = (num) => {
    fetch(`https://swapi.dev/api/people/${num}`)
      .then((response) => response.json())
      .then((data) => this.setState({ item: data }));
  };

  requestPlanet = (num) => {
    fetch(`https://swapi.dev/api/planet/${num}`)
      .then((response) => response.json())
      .then((data) => this.setState({ item: data }));
  };

  requestStarship = (num) => {
    fetch(`https://swapi.dev/api/starship/${num}`)
      .then((response) => response.json())
      .then((data) => this.setState({ item: data }));
  };

  handleClick = (index) => {
    this.setState({
      item: this.props.items[index],
    });
    console.log(this.state.item);
  };

  render() {
    const { items } = this.props;
    return (
      <>
        <ul>
          {items.map((item, index) => (
            <li key={item.name} onClick={() => this.handleClick(index + 1)}>
              {item.name}
            </li>
          ))}
        </ul>
        {/* <Item item={item} /> */}
      </>
    );
  }
}
