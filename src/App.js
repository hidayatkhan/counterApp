import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

const App = () => (
  <div className="App"> 
    <Counter />
  </div>
);

render(<App />, document.getElementById('root'));