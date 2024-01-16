import React from "react";
import { Component } from "react";
import Card from "./03Card";

class Maincard extends Component {
    render() { 
        return (
            <>
                <h1>My main card page</h1>
                <Card imgsrc="https://picsum.photos/id/237/200/300" title="hello data"/>
                <Card imgsrc="https://picsum.photos/id/537/200/300" title="hello data2"/>
                <Card imgsrc="https://picsum.photos/id/437/200/300" title="hello data3"/>
                <Card imgsrc="https://picsum.photos/id/337/200/300" title="hello data4"/>
                <Card imgsrc="https://picsum.photos/id/637/200/300" title="hello data5"/>

            </>
        );
    }
}
 
export default Maincard;