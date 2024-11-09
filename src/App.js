import React from 'react';
import './App.css';
import SignUp from './presentation/user/SignUp';

function App() {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <SignUp />
    </React.Fragment>
  );
}

export default App;
