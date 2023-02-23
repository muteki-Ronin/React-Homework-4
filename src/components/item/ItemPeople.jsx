// CORE
import { Component } from "react";
// STYLES

export class Item extends Component {
  render() {
    const { name, gender, birth_year, eye_color } = this.props.item;
    return (
      <div>
        <h3>{name}</h3>
        <p>Gender: {gender}</p>
        <p>Birth Year: {birth_year}</p>
        <p>Eye Color: {eye_color}</p>
      </div>
    );
  }
}
