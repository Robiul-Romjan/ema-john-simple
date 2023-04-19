import { Outlet } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
