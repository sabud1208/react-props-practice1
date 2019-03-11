import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js"
import Image from "./Image"

class App extends Component {
  render() {

    return <div>
    <div>
    <Header  name= "Beyonce" song= "Forward"/>;
    </div>
    <div>
    <Image url="https://pbs.twimg.com/media/ChxCkRZXAAAznIt.jpg"/>;
    </div>
    </div>


  }
}

export default App;
