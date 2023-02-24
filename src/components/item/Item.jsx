// CORE
import { Component } from "react";
// STYLES
import "./style.css";

export class Item extends Component {
  render() {
    const { item, itemType } = this.props;
    return (
      <>
        {itemType === "people" && (
          <div className="card-container">
            <h3>{item.name}</h3>
            <div>
              <p>Gender: {item.gender}</p>
              <p>Birth Year: {item.birth_year}</p>
              <p>Eye Color: {item.eye_color}</p>
            </div>
          </div>
        )}
        {itemType === "planets" && (
          <div className="card-container">
            <h3>{item.name}</h3>
            <div>
              <p>Population: {item.population}</p>
              <p>Rotation Period: {item.rotation_period}</p>
              <p>Diameter: {item.diameter}</p>
            </div>
          </div>
        )}
        {itemType === "starships" && (
          <div className="card-container">
            <h3>{item.name}</h3>
            <div>
              <p>Model: {item.model}</p>
              <p>Starship class: {item.starship_class}</p>
              <p>Length: {item.length}</p>
            </div>
          </div>
        )}
      </>
    );
  }
}
