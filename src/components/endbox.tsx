import * as React from 'react'
import './endbox.css'
type PropsType = {
    bordercolor?: string;
  
  };
  const Endbox=({bordercolor='whitesmoke'}: PropsType)=>{
    const loaderStyle={
        borderColor: bordercolor,
    }
    return (
        <>
        <div id="loader">
        <div id="box" style={loaderStyle}></div>
        <div id="hill" style={loaderStyle}></div>
        </div>
        </>
    )
  }
  export {Endbox}