import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'


function Counting() {
  return <Counter />
}

ReactDOM.render(<Counting />, document.getElementById('root'))
