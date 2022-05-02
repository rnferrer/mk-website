import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Events from './components/Events/Events';
import Board from './components/Board/Board';
import Home from './components/Home/Home';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

import {BASE_URL} from './config' 
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    if (window.localStorage.getItem('token')){
      const checkToken = async ()=>{
        const token = window.localStorage.getItem('token')
        const authToken = await fetch (`${BASE_URL}/verify`, {
          method:'get',
          headers: {'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}`},
        })
        if (authToken.ok){
          setIsLoggedIn(true)
        }
      }

      checkToken()
    }
  })



  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar isLoggedIn={isLoggedIn}/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='events' element={<Events/>} />
            <Route path='board' element={<Board/>}/>
            { (isLoggedIn)
            ?<Route path='edit' element={<Edit/>}/>
            :""
            }
            <Route path='login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='logout' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
          </Route>
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
