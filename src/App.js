import './App.css';
import React from 'react'
import Homepage from './pages/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Personas from './pages/Personas';
import Responsive from './pages/Responsive';
import Iterative from './pages/Iterative';
import Development from './pages/Development';
import About from './pages/About';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="personas" element={<Personas/>} />
          <Route path="responsive" element={<Responsive/>} />
          <Route path="iterative" element={<Iterative/>} />
          <Route path="development" element={<Development/>} />
          <Route path="about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
