import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import Classcomporoutes from "./Classcomporoutes"
import Classcompointro from "./Classcompointro";
import Classcompomenu from "./Classcompomenu";
import Classcompoprops from "./01Classcompoprops";
import Maincard from "./02Maincard";
import Classcompostate from "./04Classcompostate";
import Conditionalrendering from "./05Conditionalrendering";
import Uncontrolledcomponents from "./06Uncontrolledcomponents"
import Controlledcomponents from "./07Controlledcomponents"
import Listandkeys from "./08Listandkeys";
import Classcompositionandinheritance from "./09Classcompositionandinheritance";
import Maincounter from "./HOC(Higher Order Component)/Maincounter";


// class Classcomporoutes extends Component{
//     render(){
//         return
//     }
// }

class Classcomporoutes extends Component {
    render() { 
        return (
            <>
                <Routes>
                    <Route path="/" element ={<Classcompomenu/>}>
                        <Route path="Classcompointro" element={<Classcompointro/>}/>
                        <Route path="Classcompoprops" element={<Classcompoprops/>}/>
                        <Route path="Maincard" element={<Maincard/>}/>
                        <Route path="Classcompostate" element={<Classcompostate/>}/>
                        <Route path="Conditionalrendering" element={<Conditionalrendering/>}/>
                        <Route path="Uncontrolledcomponents" element={<Uncontrolledcomponents/>}/>
                        <Route path="Controlledcomponents" element={<Controlledcomponents/>}/>
                        <Route path="Listandkeys" element={<Listandkeys/>}/>
                        <Route path="Classcompositionandinheritance" element={<Classcompositionandinheritance/>}/>
                        <Route path="Maincounter" element={<Maincounter/>}/>

                    </Route>
                </Routes>
            </>
        )
    }
}
 
export default Classcomporoutes;