import * as React from 'react'
import './rectangle.css'
type PropsType = {

    loadcolor?: string;
    size?:string;
  };
  const Rectangle=({ loadcolor='whitesmoke',size='3vmin'}:PropsType)=>{
    const setStyle={
      '--loader-color': loadcolor,
      '--varsize':size
  } as React.CSSProperties;
    return(
        <>
        
        <div className="para">
			  <i className="load" style={setStyle} ></i>
		    </div>
      
       
        </>
    )
  }
  export {Rectangle}