import * as React from 'react'
import './endbox.css'
type PropsType = {
    borcolor?: string;
  
  };
  const Endbox=({borcolor='whitesmoke'}: PropsType)=>{
    const loaderStyle={
        borderColor: borcolor,
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