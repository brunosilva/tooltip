import React from 'react'
import Tooltip from './component/tooltip'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-link">
          Código <Tooltip textMessage="Sua mensagem aqui." />
        </span>
      </header>
    </div>
  )
}

export default App
