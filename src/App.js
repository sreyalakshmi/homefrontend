import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Electrician from './components/Electrician';
import ViewElectrician from './components/ViewElectrician';
import Home from './components/Home';
import ViewPlumber from './components/ViewPlumber';
import Plumber from './components/Plumber';
function App() {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/electrician' element={<Electrician/>}/>
      <Route path='/viewelectrician' element={<ViewElectrician/>}/>
      <Route path='/plumber' element={<Plumber/>}/>
      <Route path='/viewplumber' element={<ViewPlumber/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
