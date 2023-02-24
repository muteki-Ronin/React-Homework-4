// CORE
import { Component } from "react";
// STYLES
import "./style.css";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log("ErrorInfo:");
    console.log(errorInfo);
  }

  reloadApplication() {
    document.location.reload();
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary-container">
          <h2>Oops!</h2>
          <h1>ERROR!!!</h1>
          <button onClick={this.reloadApplication}>RELOAD</button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
