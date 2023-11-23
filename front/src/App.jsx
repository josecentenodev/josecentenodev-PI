import React from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Landing from './pages/Landing';

const App = () => {
  return (
    <Routes>
      <Route
          path="/"
          element={
            <Landing />
          }
        />
    </Routes>
  )
}

export default App