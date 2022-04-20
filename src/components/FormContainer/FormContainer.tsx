import React, { useState } from "react";
import { ActionSelector } from "../ActionSelector/ActionSelector";
import { CircleButton } from "../generic/Button/CircleButton";
import "./FormContainer.css";

export const FormContainer = (props: any) => {
  const [formType, setFormType] = useState(props.actionType);
  const handleFormChange = ({ target }: any): void => {
    setFormType(target.value);
  };
  return (
    <div className="container" id="container">
      <div className="form">
        <CircleButton onClick={props.handleClose}> x </CircleButton>
        <ActionSelector
          active={formType}
          displayStyle="inline"
          handleClick={handleFormChange}
        />
        {props.children}
        <p>{formType}</p>
      </div>
    </div>
  );
};
