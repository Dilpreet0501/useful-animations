import * as React from 'react'
import './btnwiggle.css'
type PropsType={
    children: React.ReactNode;
    onClick?: () => void;
     backgroundcolor?:string;
     fontcolor?:string;
}
const Wiggle=({children, onClick, backgroundcolor='#444', fontcolor='#fff'}: PropsType)=>{
    const btnStyle={
        background: backgroundcolor,
        color: fontcolor
    }
    return (
        <>
<button onClick={onClick} style={btnStyle}>{children}</button>   
        </>
    )
}
export {Wiggle}