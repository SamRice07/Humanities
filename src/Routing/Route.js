import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Theme from '../Components/Theme/Theme';
import Hitler from '../Components/Hitler/Hitler';
import Timeline from '../Components/Addons/Timeline/Timeline';
import Connection from '../Components/Connection/Connection';
import Cards from '../Components/Addons/Cards/Cards';
import Gatsby from '../Components/Gatsby/Gatsby';
import CharCard from '../Components/Addons/CharCards/CharCard';
import Sources from '../Components/Addons/Sources/Sources';

export default function Routing() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Theme />} />
          <Route  path="/hitler" element={<Hitler />} />
          <Route  path="/connection" element={<Connection />} />
          <Route  path="/gatsby" element={<Gatsby />} />
          <Route  path="/test" element={<Sources />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
