import React from "react";
import { Component } from "react";


class Classcompostate extends Component {

    constructor(){
        super()
        this.state = {
            count : 0,
            name : "kiran"
        }
    }

    increment = () => {
        console.log("increment");
        this.setState({count : this.state.count + 1})
        this.setState({name : this.state.name = "nirav"})

    }
    decrement = () => {
        console.log("decrement");
        this.setState({count : this.state.count - 1})
    }

    render() { 
        let data = 10
        return (
            <>
                <h1>Classcompostate</h1>
                <h2>{this.state.count}</h2>
                <h2>{this.state.name}</h2>

                {/* <h1>{data}</h1> */}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

            </>
        );
    }
}
 
export default Classcompostate;