import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Component } from "react";
// import Classcompomenu from "./Classcompomenu"

class Classcompomenu extends Component {
    render() { 
        return (
            <>
                <ul>
                    <li><Link to="Classcompointro" >Classcompointro</Link></li>
                    <li><Link to="Classcompoprops" >Classcompoprops</Link></li>
                    <li><Link to="Maincard" >Maincard</Link></li>
                    <li><Link to="Classcompostate" >Classcompostate</Link></li>
                    <li><Link to="Conditionalrendering" >Conditionalrendering</Link></li>
                    <li><Link to="Uncontrolledcomponents" >Uncontrolledcomponents</Link></li>
                    <li><Link to="Controlledcomponents" >Controlledcomponents</Link></li>
                    <li><Link to="Listandkeys" >Listandkeys</Link></li>
                    <li><Link to="Classcompositionandinheritance" >Classcompositionandinheritance</Link></li>
                    <li><Link to="Maincounter" >Maincounter</Link></li>

                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}
 
export default Classcompomenu;