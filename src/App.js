import react from 'react';
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact/>
      </Routes>

    </Router>

    </>
  );
}

export default App;
