import Login from './components/Sign/Login.jsx';
import Signup from './components/Sign/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/signup" element={<Signup />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
