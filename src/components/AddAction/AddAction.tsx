import React, { useState } from 'react';
import { ActionSelector } from '../ActionSelector/ActionSelector';

export const AddAction = () => {

  const [display, setDisplay] = useState(false);
  const hide = () => setDisplay(false);
  const show = () => setDisplay(true);

  return (
    <>
      <div>
        {
          display ? <ActionSelector /> : null
        }
      </div>
      <div>
        {
          display
            ? <button
              onClick={hide}
              className='hide'>x</button>
            : <button
              onClick={show}
              className='show'>+</button>
        }
      </div>
    </>
  );
} 