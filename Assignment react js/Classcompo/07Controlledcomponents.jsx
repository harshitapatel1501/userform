import React from "react";
import { Component } from "react";

class Controlledcomponents extends Component {

    constructor(){
        super()
        this.state = {
            name : "",
            age : ""
        }
    }

    submit = (event) => {
        event.preventDefault()
        console.log("submit");
        console.log(this.state.name)
        console.log(this.state.age)

    }

    render() { 
        return (
            <>
                <form onSubmit={this.submit}>
                    <input value={this.state.name} onChange={(e)=>this.setState({name : e.target.value})} type="text" name="uname" id="uname"/>
                    <input value={this.state.age} onChange={(e)=>this.setState({age : e.target.value})} type="text" name="uname" id="uname"/>

                    <input type="submit" name="btn" id="btn"/>
                </form>
            </>
        );
    }
}
export default Controlledcomponents;