import * as React from 'react'
import './simpleloader.css'

type PropsType = {

    bordercolor?: string;
    bordertop?:string;
  };
const SimpleSpinner=({bordercolor, bordertop}: PropsType)=>{
    const setStyle={
        '--color1': bordercolor,
        '--color2':bordertop
      }as React.CSSProperties;
    return(
        <>
        <div id="html-spinner" style={setStyle}></div>
        </>
    )
}

export {SimpleSpinner}