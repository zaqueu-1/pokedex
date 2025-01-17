import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import PokemonPage from "./pages/[pokeId]/page"
import { PokemonProvider } from "./context/PokemonContext"

function App() {
  return (
    <Router>
      <PokemonProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:pokeId' element={<PokemonPage />} />
          <Route path='/pokemon/:name' element={<PokemonPage />} />
        </Routes>
      </PokemonProvider>
    </Router>
  )
}

export default App
