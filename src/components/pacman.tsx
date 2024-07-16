import * as React from 'react'
import './pacman.css';

type PropsType = {
  bordercolor?: string;
  pathcolor?: string;
};

const Pacman: React.FC<PropsType> = ({ bordercolor = '#FFCC00', pathcolor = '#FFFFFF' }: PropsType) => {
  const pacmanStyle = {
    color: bordercolor,
  };

  const pathStyle = {
    background: pathcolor,
  };

  return (
    <>
      <div className="container">
        <div className="pacman" style={pacmanStyle}>
          <div className="path" style={pathStyle}>
          <div></div>
          <div ></div>
          <div ></div>
          <div ></div>
          {/* <div></div>
          <div></div>
          <div></div> */}
        </div>
        </div>
      </div>
    </>
  );
};

export { Pacman };

