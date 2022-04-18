import React, { useState } from "react";
import { CircleButton } from "../generic/Button/CircleButton";
import "./FormContainer.css";

export const FormContainer = (props: any) => {
  const [formType, setFormType] = useState(props.actionType);
  const handleFormChange = ({ target }: any) => {
    setFormType(target.value)
  }
  return (
    <div className="container" id="container">
      <div className="form">
        <CircleButton onClick={props.handleClose}> x </CircleButton>
        {props.children}
        <p>{props.actionType}</p>
      </div>
    </div>
  );
};
