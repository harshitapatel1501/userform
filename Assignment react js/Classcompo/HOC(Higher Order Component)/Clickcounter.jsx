import { Component } from "react";
import React from "react";
import Updatecomponent from "./HOC";

class Clickcounter extends Component {
    

    render() { 
        const {count , increment  , name} = this.props
        return (
            <>
                <h1>{count}</h1>
                <h2>{name}</h2>
                <button onClick={increment}>Update</button>
            </>
        );
    }
}
 
export default Updatecomponent(Clickcounter);