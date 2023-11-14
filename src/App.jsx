import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import Connect from './views/Connect'
import NotFound from './views/NotFound'

function App() {
   return (
    
    
    <BrowserRouter>
        
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/connect" element={<Connect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
  </BrowserRouter>
  
   )
}

export default App
