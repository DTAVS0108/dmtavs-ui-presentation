import React from 'react';
import "./App.css";
import ResponsiveAppBar from './Components/AppBar';

const customStyle = {
  displayNone: "none" 
}

const App: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar customStyle={customStyle} navList={["home", "contact", "about"]} />
    </>
  );
};

export default App;
