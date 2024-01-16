import React from "react";

import { Component } from "react";

class Listandkeys extends Component {
    constructor(){
        super()
        this.state = {
            item : [1,2,3,4,5,6]
        }
    }
    add = () =>{
        console.log("add");
        this.setState({
            item : [7,1,2,3,4,5,6]
        })
    }

    render() { 
        // const item = [1,2,3,4,5]
        const items = this.state.item.map((list)=><li key={list.toString()}>{list}</li>)
        return (
          <>
            <ul>
                {items}
            </ul>
            <h4>{this.props.data}</h4>
            <div>{this.props.children}</div>
            <button onClick={this.add}>add</button>
          </>  
        );
    }
}
 
export default Listandkeys;