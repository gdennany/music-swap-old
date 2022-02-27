import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from './screen/WelcomeScreen';
import SwapScreen from "./screen/SwapScreen";
import InitiateSwaps from "./screen/InitiateSwaps";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="select-swaps" element={<SwapScreen />} />
        <Route path="initiate-swaps" element={<InitiateSwaps />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

