import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='Signup' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
