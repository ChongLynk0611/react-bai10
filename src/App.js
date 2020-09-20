import React from 'react';
import logo from './logo.svg';
import './App.css';
import  ToDo from './component/ToDo/index';
function App() {
  let ToDos = ['DiLam' ,'Di Tam', 'Di Hoc' ];
  return (
    <ToDo ToDo={ToDos} />
  );
}

export default App;
