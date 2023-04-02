import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Questions from './components/Questions/Questions';
import CafeDatas from './components/CafeDatas/CafeDatas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <CafeDatas></CafeDatas>
      <Questions></Questions>
    </div>
  )
}

export default App
