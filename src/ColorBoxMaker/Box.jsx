import React from "react";

const Box = ({ id, color, height, width, borderRadius}) => {

    const userStyles = {
        backgroundColor: color,
        height: height,
        width: width,
        borderRadius: borderRadius 
    }
   return (
    <div style={userStyles}/>
   )
}


export default Box;