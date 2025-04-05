/* Main Component*/
import { useState } from 'react'
import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'

function App() {

  // Render <Component2 /> under <Component1 /> 
  return (
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
  )
}

export default App
