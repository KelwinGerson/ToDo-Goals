import './App.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskBox } from './components/TaskBox'

import './global.css';

function App() {
  return (
    <div>
      <Header/>
      <NewTask/>
      <TaskBox/>
    </div>
  )
}

export default App
