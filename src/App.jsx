import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import Connect from './views/Connect'
import News from './views/News'
import NotFound from './views/NotFound'


function App() {
   return (
    
    
    <BrowserRouter>
        
        <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/connect" element={<Connect />} />
                  <Route path="/News" element={<News />} />
                  
                  <Route path='*' element={<NotFound />} />
        </Routes>

  </BrowserRouter>
  
   )
}

export default App
