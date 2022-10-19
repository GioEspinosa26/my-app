import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './compents/Navegador/Navbar'
import Galeria from './compents/Paginas/Galeria'
import Acerca from './compents/Paginas/Acerca'
import Contacto from './compents/Paginas/Contacto'
import Inicio from './compents/Paginas/Inicio'


function App() {
  return (
    <div className="App">

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Inicio/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
        <Route path='/Acerca' element={<Acerca/>}/>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>
    </Router>    



    </div>
  );
}

export default App;
