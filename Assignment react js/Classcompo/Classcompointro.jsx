import React, { Component } from "react";

class Classcompointro extends Component{
    render(){
        return(
            <>
                <h1>Class intro</h1>
                <h2>{this.props.data}</h2>
                <h3>{this.props.email}</h3>
                <h3>{this.props.name}</h3>
                <h3>{this.props.user.name}</h3>
                <h3>{this.props.user.age}</h3>


                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni error adipisci consectetur voluptatibus beatae sed, soluta aliquam quam eaque repellat!</p>
            </>
        )
    }
} 

export default Classcompointro