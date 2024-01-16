import React from "react";
import { Component } from "react";
import Listandkeys from "./08Listandkeys"
class Classcompositionandinheritance extends Component {
    render() {
        let name = "sumit" 
        return (
            <>
                <h1>Classcompositionandinheritance</h1>
                {/* <h2>{name}</h2> */}
                <Listandkeys data={name}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae incidunt magnam facilis consequatur atque, veritatis laboriosam commodi minus ipsam!</p>
                    <button>this is Listandkeys from composition</button>
                </Listandkeys>
            </>
        );
    }
}
 
export default Classcompositionandinheritance;