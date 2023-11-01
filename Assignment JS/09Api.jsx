import React, { useEffect } from "react";
import Useeffect from "./04Useeffect";

const Api = () => {

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
            console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
            })
        })
    },[])


    return (  
        <>
            <h1>Api</h1>
        </>
    );
}
 
export default Api;