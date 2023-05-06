import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Purchases from './Pages/Purchases'
import Product from './Pages/Product'
import Header from './components/Layout/Header'
import Notfound from './Pages/Notfound'


function App() {
 

  return (
    <section>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/products/:id' element={<Product />}/>
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </section>
  )
}

export default App
