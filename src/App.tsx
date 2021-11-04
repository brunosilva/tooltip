import Tooltip from './component/tooltip'
import './App.css'

function App() {
  return (
    <Tooltip title="Este campo é obrigatório" showIcon={true}>
      <label>Código</label>
    </Tooltip>
  )
}

export default App
