import React from "react";
import { Component } from "react";
import Classcompointro from "./Classcompointro";

class Classcompoprops extends Component {
    render() { 
        let name = "harshita"
        let user = {
            name : "kiran",
            age : 23
        }
        return (
            <>
                <h1>Classcompoprops</h1>
                <Classcompointro user={user} name={name} data="vishal" email="vishal@gmail.com"/>
            </>
        );
    }
}
 
export default Classcompoprops;