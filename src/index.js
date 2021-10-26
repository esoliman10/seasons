import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // LONG METHOD USING CONSTRUCTOR
  /* constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };
  } */

  // SHORTCUT EQUIVALENT OF CONSTRUCTOR METHOD
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    console.log("My component was rendered to the screen")
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message  })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!")
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      // return <div>Latitude: {this.state.lat}</div>
      return <SeasonDisplay lat={this.state.lat} />
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    return <Loader message="Please accept location request" />
  }

  render() {  
    return this.renderContent()
  };
};

if (module.hot) {
  module.hot.accept();
}


ReactDOM.render(<App />, document.getElementById("root"));