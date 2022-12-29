import React from 'react';

const Avatar = ({ backgroundColor, px, py, borderRadius, color, children,width,height }) => {
  const style = {
    backgroundColor,
    width:`${width}px`,
    height:`${height}px`,
    borderRadius:"4px",
    color,
    cursor: 'cursor' || null,
    textAlign: 'center',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginRight:"8px"
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
