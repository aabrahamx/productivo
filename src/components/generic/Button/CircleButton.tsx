import React from "react";

const style = {
  display: 'block',
  borderRadius: "50%",
  aspectRatio: "1 / 1",
};
export const CircleButton = (props: any) => {
  return (
    <button 
      style={style} 
      onClick={props.onClick} 
      className={props.className}
    >
      {props.children}
    </button>
  );
};
