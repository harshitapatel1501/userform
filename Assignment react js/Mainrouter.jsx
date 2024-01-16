import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";
import Userdata from "./Userdata";
import Useradd from "./Useradd";
import Userdetails from "./Userdetails";
import Useredit from "./Useredit";

const Mainrouter = createBrowserRouter([
    {
        path : "/",
        element : <Navbar/>
    },
    {
        path : "/userdata",
        element : <><Navbar/><Userdata/></>
    },
    {
        path : "/useradd",
        element : <><Navbar/><Useradd/></>
    },
    {
        path : "/userdetails/:userid",
        element : <><Navbar/><Userdetails/></>
    },
    {
        path : "/useredit/:userid",
        element : <><Navbar/><Useredit/></>
    }
])
export default Mainrouter;