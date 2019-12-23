import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './actions';


function App() {

  const dispatch = useDispatch();

  const doIncrement = () => {
    return dispatch(increment());
  };

  const doDecrement = (nr) => {
    return dispatch(decrement(nr));
  };
  
  const visitCount = useSelector((state) => state.visitCount );
  
  return (
    <div className="App">
      <h1>Visit Count: {visitCount} </h1>
      <button onClick={() => doIncrement()} className="button green">Increment by 1</button> 
      <button onClick={() => doDecrement(3)} className="button red">Decrement by 3</button>
    </div>
  );
}

export default App;
