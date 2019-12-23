import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, logout } from './actions';
import { login } from './actions/index';


function App() {

  const dispatch = useDispatch();

  const doIncrement = () => {
    return dispatch(increment());
  };

  const doDecrement = (nr) => {
    return dispatch(decrement(nr));
  };

  const doLogin = () => {
    return dispatch(login());
  };

  const doLogout = () => {
    return dispatch(logout());
  };
  
  const { visitCount, isLogged } = useSelector((state) => state );
  
  return (
    <div className="App">
      <h1>Visit Count: {visitCount} </h1>
      <button onClick={() => doIncrement()} className="button green">Increment by 1</button> 
      <button onClick={() => doDecrement(3)} className="button red">Decrement by 3</button>
      <br />
      {(() => {
        if(!isLogged) {
          // Do Login
          return <button onClick={() => doLogin()} className="button blue">Login</button>
        } else {
          // Already logged in
          return <div>
            <h1>Welcome</h1>
            <button onClick={() => doLogout()} className="button blue">Logout</button>
          </div>
        }
      })()
      }
    </div>
  );
}

export default App;
