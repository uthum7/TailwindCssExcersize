import { useState } from 'react'
import './App.css'
import Hero from './Componants/Hero'
import Detail from './Componants/Detail'
import Nav from './Componants/Nav'
import Card from './Componants/Card'
import Footer from './Componants/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (   
    <>
    <Nav/>
    <Hero/>
    <Card/>
    <Detail/>
    <Footer/>
    </>
  )
}

export default App
