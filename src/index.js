import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from './screen/WelcomeScreen';
import SwapScreen from "./screen/SwapScreen";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="test" element={<SwapScreen />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

