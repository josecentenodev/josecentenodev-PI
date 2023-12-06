import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/Nav';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Detail from './pages/Detail'
import Crear from './pages/Create'
import Editar from './pages/Edit'
import Info from './pages/Info'

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
          path="/info"
          element={
            <Info />
          }
        />
        <Route path='/crear' element={<Crear />} />
        <Route path='/editar/:id' element={<Editar />} />
        <Route
          path="drivers/:id"
          element={<Detail />}
        />
    </Routes>
    </>
  )
}

export default App