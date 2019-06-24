import React from 'react';
import './App.css';
import Person from './container/Person/Person';
import Options from './components/Person/PersonOptions';
import Counter from './container/Counter/Counter';
import CounterOptions from './components/Counter/CounterOptions';
import Pictures from './container/Pictures/Pictures';
import PicturesOptions from './components/Pictures/PicturesOptions';
import WordCloud from './container/WordCloud/WordCloud';

function App() {
  return (
    <div className="App">
      <div style={{width:"30%",float:"left"}}>
        <Person/>
      <Options/>
      </div>
      <div style={{width:"70%",float:"right"}}>
      <Counter/>
      <CounterOptions/>
      <br/>
      <hr/>
      <Pictures/>
      <PicturesOptions/>
      <WordCloud/>
    </div>
    </div>
  );
}

export default App;
