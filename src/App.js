// CORE
import { Component } from "react";
// COMPONENTS
import { ListItems } from "./components/listItems/ListItems";
// STYLES

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemTypes: "people",
    };
  }

  requestItems = (str) => {
    fetch(`https://swapi.dev/api/${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ items: data.results, item: [] }));
  };

  componentDidMount() {
    this.requestItems("people");
  }

  handleClick = (str) => {
    this.requestItems(str);
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>StarDB</h1>
        </header>
        <main>
          <div className="btn-panel">
            <button onClick={() => this.handleClick("people")}>People</button>
            <button onClick={() => this.handleClick("planets")}>Planets</button>
            <button onClick={() => this.handleClick("starships")}>
              Starships
            </button>
          </div>
          <ListItems
            items={this.state.items}
            item={this.state.item}
            requestItem={this.requestItem}
          />
        </main>
      </div>
    );
  }
}

export default App;
