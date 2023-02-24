// CORE
import { Component } from "react";
// COMPONENTS
import { ListItems } from "../components/listItems/ListItems";
import { Loader } from "../components/loader/Loader";
import { ErrorBoundary } from "../components/errorBoundary/ErrorBoundary";
// STYLES
import "./style.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemType: "people",
      isLoading: true,
    };
  }

  requestItems = (type) => {
    fetch(`https://swapi.dev/api/${type}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ items: data.results, itemType: type, isLoading: false })
      )
      .catch((error) => {
        console.error(error);
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.requestItems("people");
  }

  handleClick = (type) => {
    this.setState({
      isLoading: true,
    });
    this.requestItems(type);
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="container">
          <header className="header-container">
            <h1 className="header-title">StarDB</h1>
          </header>
          <main className="main-container">
            <div className="btn-panel">
              <button
                className={
                  this.state.itemType === "people" ? "btn-active" : "btn"
                }
                onClick={() => this.handleClick("people")}
              >
                People
              </button>

              <button
                className={
                  this.state.itemType === "planets" ? "btn-active" : "btn"
                }
                onClick={() => this.handleClick("planets")}
              >
                Planets
              </button>

              <button
                className={
                  this.state.itemType === "starships" ? "btn-active" : "btn"
                }
                onClick={() => this.handleClick("starships")}
              >
                Starships
              </button>
            </div>
            {this.state.isLoading ? (
              <Loader />
            ) : (
              <ListItems state={this.state} requestItem={this.requestItem} />
            )}
          </main>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
