import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from '../Pages/Home';
import Task from '../Pages/Task';
import QrCode from '../Pages/QrCode';


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}