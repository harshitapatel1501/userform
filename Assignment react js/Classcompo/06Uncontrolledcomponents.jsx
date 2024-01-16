import React from "react";
import { Component } from "react";

class Uncontorlledcomponents extends Component {

    constructor(){
        super()
        this.input = React.createRef()
    }


    submit = (event) => {
        event.preventDefault()
        console.log("submit");
        console.log(this.input);
        console.log(this.input.current.value);
        //  return false
    }

    render() { 
        return (
            <>
                <form onSubmit={this.submit}>
                    <input type="text" ref={this.input} name="uname" id="uname"/>
                    <input type="submit" name="btn" id="btn"/>
                </form>
            </>
        );
    }
}
 
export default Uncontorlledcomponents;