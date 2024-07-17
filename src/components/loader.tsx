import * as React from 'react'
import './loader.css'
type PropsType = {
    loadercolor?: string;
  
  };
const ThreedotLoader:React.FC<PropsType>=({loadercolor= '#555'}:PropsType )=>{
    const stcolor={
        color:loadercolor ,
    };
    
return (
<>
<div className="loader">
  <span className="loader__element" style ={stcolor}></span>
  <span className="loader__element" style ={stcolor}></span>
  <span className="loader__element" style ={stcolor}></span>
</div>
</>
)
}
export {ThreedotLoader}