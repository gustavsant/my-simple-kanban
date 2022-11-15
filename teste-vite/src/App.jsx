import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
