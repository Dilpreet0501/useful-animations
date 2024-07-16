import * as React from 'react'
import './squareloader.css'
type PropsType = {

    loadcolor?: string;
    size?:string;
  };
  const SquareLoader=({ loadcolor='whitesmoke',size='3vmin'}:PropsType)=>{
    const setStyle={
      '--color': loadcolor,
      '--varsize':size
    }as React.CSSProperties;
    return(
        <>
        <div className="item">
        <i className="loader" style={setStyle}></i>
        </div>
        </>
    )
  }
  export {SquareLoader}