//import logo from './logo.svg';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
//import Activities from './components/Activities';
import './App.css';
 import Home from './components/Home';
import About from './components/About';
import Activities from './components/Activities';
import Resources from './components/Resources';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />}/>
          <Route path='activities' element={<Activities />}/>
          <Route path='Resources' element={<Resources />}/>
          <Route path='registration' element={<Registration />}/>
          <Route path='login' element={<Login />}/>
          <Route path='council' element={<About />}/>

        </Routes>

    </div>
  );
}

export default App;
