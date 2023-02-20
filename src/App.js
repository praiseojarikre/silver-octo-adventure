import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Componenets/Body';
import Home from './Componenets/Home';
import Navbar from './Componenets/Navbar';
import Errors from '../src/Componenets/Errors'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element ={<Errors/>}/>
        <Route path="Body" element= {<Body/>}/>
      </Routes>
      </BrowserRouter>
      
     
    
   
    </div>
  );
}

export default App;
