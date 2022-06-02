// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
 

    createArray = (event) => {
        let cursorX = event.clientX
        let cursorY = event.clientY
        const newArray = [cursorX, cursorY]
      
        this.props.onReceiveCoordinates(newArray)
    }

    render(){
        return  <button onClick={this.createArray}>Click Me</button>
    }

}
