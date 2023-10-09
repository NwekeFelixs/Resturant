import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Loader from './components/fragments/Loader';


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
