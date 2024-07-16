import * as React from 'react'
import './scroll-watcher.css'
type PropsType = {
    pathcolor?: string;
    
  };
const Watcher=({pathcolor="lime"}:PropsType )=>{
    const setStyle={
        background: pathcolor
    }

    return(
        <>
        <div className='scroll-watcher' style={setStyle}>

        </div>
        </>
    )
}
export {Watcher}