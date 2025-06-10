import './App.css'
import Login from './compnents/Login'
import FactsPage from './pages/FactsPage'
import HomePage from './pages/HomePage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProgressPage from './pages/ProgressPage'
import AboutPage from './pages/AboutPage'


// import Navbar from './compnents/Navbar'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element= {<HomePage/>} />
      <Route path="/facts" element={<FactsPage/>} />
      <Route path="/progress" element={<ProgressPage/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
