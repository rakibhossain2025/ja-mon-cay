import { Outlet } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
