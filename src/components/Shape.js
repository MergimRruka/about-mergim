import React from 'react';
import '../stylesheet/Shape.css'



export default function Shape(props) {


    if(props.type === "circle"){
        return (
            <div className={props.type + " " + props.color} style={{height: props.size,  width: props.size, transform: "rotate(" + props.rotate+"deg)"}}/>
         )
    }else if(props.type === "emptyCircle"){
        return (
            <div className={props.type} style={{height: props.size,  width: props.size}}/>
         )
    }

    return (
       <div className={props.type+" border-gradient border-gradient-"+props.color} style={{height: props.size, width: props.size, transform: "rotate(" + props.rotate+"deg)"}}/>
    )
}