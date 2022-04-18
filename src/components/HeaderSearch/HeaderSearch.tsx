
import React, { useState } from "react";
import { ActionSelector } from "../ActionSelector/ActionSelector";

export const HeaderSearch = (props : any) => {

  const [display, setDisplay] = useState(false);
  document.body.onkeydown = slashEventListner;
  function slashEventListner(e: any) {
    if (e.key === '/') { setDisplay(display ? false : true) }
  }

  return (
    <>
      <input
        type='search'
        placeholder="/ + event to search"
        onKeyDown={e => slashEventListner(e)}
      />
      {
        display ? <ActionSelector handleClick={props.handleClick} /> : null
      }
    </>
  );
}