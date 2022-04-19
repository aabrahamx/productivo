import React, { useState } from 'react';

import { AddAction } from '../components/AddAction/AddAction'
import { FormContainer } from '../components/FormContainer/FormContainer';

import './App.css';


function App() {


  const [displayForm, setDisplayForm] = useState(false);
  const [actionType, setActionType] = useState('')
  const handleActionSelectorClicks = ({target}: any) => {
    setDisplayForm(true)
    setActionType(target.value)
  };
  const handleFormContainerClose = () => setDisplayForm(false)
  let display 
  if (!displayForm) {
    display = <AddAction handleClick={handleActionSelectorClicks} />
  } else {
    display = <FormContainer actionType={actionType} handleClose={handleFormContainerClose} />
  }

  return (
    <div className="App">
      <header>
      </header>
      <main></main>
      <aside></aside>
      <footer></footer>
      { display }
    </div>
  );
}

export default App;
