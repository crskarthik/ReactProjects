import React from 'react';
import './App.css';
import Person from './container/Person/Person';
import Options from './components/Person/PersonOptions';
import Counter from './container/Counter/Counter';
import CounterOptions from './components/Counter/CounterOptions';
import Pictures from './container/Pictures/Pictures';
import PicturesOptions from './components/Pictures/PicturesOptions';

function App() {
  return (
    <div className="App">
      <div style={{width:"50%",float:"left"}}>
        <Person/>
      <Options/>
      </div>
      <div style={{width:"50%",float:"right"}}>
      <Counter/>
      <CounterOptions/>
      <br/>
      <hr/>
      <Pictures/>
      <PicturesOptions/>
    </div>
    </div>
  );
}

export default App;
