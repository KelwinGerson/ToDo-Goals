import './App.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'

import './global.css';

function App() {
  return (
    <div>
      <Header/>
      <NewTask/>
      <Task/>
    </div>
  )
}

export default App
