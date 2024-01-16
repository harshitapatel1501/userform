import React from "react";
import { Component } from "react";

const Updatecomponent = Originalcomponent=>{

    class Newcomponent extends Component {
        constructor(){
            super()
            this.state = {
                count : 0
            }
        }
    
        increment = ()=>{
            // console.log("increment");
            this.setState({count : this.state.count + 1})
        }

        render() { 
            return (
                <>
                    <Originalcomponent increment={this.increment} name="vishal" count={this.state.count}/>
                </>
            );
        }
    }
    return Newcomponent
}
export default Updatecomponent;