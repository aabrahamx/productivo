import React, { useState } from "react";

import { AddAction } from '../AddAction/AddAction'
import { FormContainer } from '../FormContainer/FormContainer';

/**
 * Main responsibility for this  component is to handle user input render state.
 * Depending on the state it will either show a AddAction component or FormContainer component
 * @returns A React Functional Component
 */

export const AddToCalandarManager : React.FC = () => {

  const [displayForm, setDisplayForm] = useState(false);
  const [actionType, setActionType] = useState('')
  const handleFormContainerClose = (): void => setDisplayForm(false);
  const handleActionSelectorClicks = ({target}: any): void => {
    setDisplayForm(true)
    setActionType(target.value)
  };

  return (
    <>
      {!displayForm ? (
        <AddAction handleClick={handleActionSelectorClicks} />
      ) : (
        <FormContainer
          actionType={actionType}
          handleClose={handleFormContainerClose}
        />
      )}
    </>
  );
}