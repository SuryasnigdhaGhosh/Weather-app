import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import WeatherDashboard from "./container/WeatherDashboard";

function App({ }) {
  return (
    <BrowserRouter basename="/Weather-app">
      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
