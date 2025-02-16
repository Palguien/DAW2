import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import Posts from './Posts.jsx'
import Perfil from './Perfil.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/usuario/:userId" element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
