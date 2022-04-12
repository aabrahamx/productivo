import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { AddAction } from './components/AddAction/AddAction'
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <main></main>
      <aside></aside>
      <footer></footer>
      <div className="AddToCalendar">
        <AddAction />
      </div>
    </div>
  );
}

export default App;
