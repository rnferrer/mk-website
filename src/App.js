import react from 'react';
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Events from './components/Events/Events';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path='events' element={<Events/>} />
          <Route path='board'/>
          <Route path='hixstory' />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
