import React from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from './components/Nav';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Detail from './pages/Detail'

const App = () => {
  let location = useLocation()

  return (
    <>
    {location.pathname !== '/' && (<NavBar/>)}
    <Routes>
      <Route
          path="/"
          element={
            <Landing />
          }
        />
        <Route
          path="/home"
          element={
            <Home />
          }
        />
        <Route
          path="drivers/:id"
          element={<Detail />}
        />
    </Routes>
    </>
  )
}

export default App