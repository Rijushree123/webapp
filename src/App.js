import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home'
import Task from './Task';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path="/task" element={<Task/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
