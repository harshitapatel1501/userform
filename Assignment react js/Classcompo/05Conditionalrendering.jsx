import { MDBListGroup } from "mdb-react-ui-kit";
import React from "react";
import { Component } from "react";

class Conditionalrendering extends Component {
    constructor(){
        super()
        this.state = {
            islogin : true
        }
    }
    render() { 

        return this.state.islogin && <h1>Welcome tops</h1>
        // (conditionalrendering)



        // return this.state.islogin ? <h1>Welcome tops</h1> : <h1>Welcome guest</h1>
                    // (ternary operator)


        // let msg
        
        // if(this.state.islogin){
        //     msg = <><div><h1>Welcome tops</h1></div></>
        // }
        // else{
        //     msg = <><div><h1>Welcome guest</h1></div></>
        // }
        // return msg
            //    (memory allocation)



        // if(this.state.islogin){
        //     return <><h1>Welcome tops</h1></>
        // }
        // else{
        //      return <><h1>Welcome guest</h1></>
        // }
                // (condition operator)

        // return (
        //     <>
        //         <h1>Welcome tops</h1>
        //         <h1>Welcome guest</h1>
        //     </>
        // );
    }
}
 
export default Conditionalrendering;