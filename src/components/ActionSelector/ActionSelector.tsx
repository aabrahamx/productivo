import React from "react";

const actions = ['Event', 'Reminder', 'Goal', 'Chore'];
const style = {
  display: 'block',
  width: '100%',
}

export const ActionSelector = () => {
  return (
    <>
      {
        actions.map(item => {
          return <button style={style}>{item}</button>
        })
      }
    </>
  );
}