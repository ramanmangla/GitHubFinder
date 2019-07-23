import React, { Component } from "react";
import "./App.css";

class App extends Component {
  foo = () => "Bars";

  render() {
    const name = "John Doe";
    const loading = false;

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    return (
      // React Fragment over div to use a ghost container
      // Fragment isn't visible in DOM
      <div className="App">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>
            Hello {name.toUpperCase()} {this.foo()}
          </h1>
        )}
      </div>
    );
  }
}

export default App;
