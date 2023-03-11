import { useState } from 'react'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Main />
      <News />
    </div>
  )
}

export default App
