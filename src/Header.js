import React, { Component} from "react";

class Header extends Component {

  render() {
    console.log(React)
    return <div>
    <div>
    <h1> Artist: {this.props.name} </h1>
    </div>
    <div><h2> {this.props.song} </h2></div>
    </div>

  }
}

export default Header;
