
import React from 'react'
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import {createContext} from 'react'

export const ThemeContext = createContext(null);

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
      <footer className= "page-footer">
      </footer>
    </div>
  )
}
