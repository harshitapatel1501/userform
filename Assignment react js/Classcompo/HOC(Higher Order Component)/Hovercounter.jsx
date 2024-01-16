import React from "react";
import { Component } from "react";
import Updatecomponent from "./HOC";

class Hovercounter extends Component {
   

    render() { 
        return (
            <>
                <h1>{this.props.count}</h1>
                <button onMouseEnter={this.props.increment}>Update</button>
            </>
        );
    }
}
 
export default Updatecomponent(Hovercounter);