import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props){

  const navigate = useNavigate()
  const [signInUser, setSignInUser] = useState('')
  const [signInPass, setSignInPass] = useState('')

  const onUserChange = (event)=> {
    setSignInUser(event.target.value)
  }

  const onPassChange = (event)=> {
    setSignInPass(event.target.value)
  }  

  const onSubmitLogin = async(event) =>{
    event.preventDefault()
    const user = await fetch('/login', {
      method:'post',
      headers: {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({
        username: signInUser,
        password: signInPass
      })
    })


    if(user.ok){
      props.setIsLoggedIn(true)
      const userToken = await user.text()
      window.localStorage.setItem('token', userToken)
      navigate('/')
    }
  }

  const onSubmitLogout = async(event) =>{
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    const logout = await fetch ('/logout', {
      method:'post',
      headers: {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`},
    })
    
    window.localStorage.removeItem('token')
    props.setIsLoggedIn(false)

    navigate('/login')
  }

  return(
    <div className='login-container'>

      {(props.isLoggedIn)

        ?
        <div className='login-box'>
            <h3 className='login-title'>Logout</h3>
            <p>Would you like to log out?</p>
            <button className='submit-btn logout-btn' onClick={onSubmitLogout}>Yes</button>
        </div>
        :<>
          <form className='login-box'>

          <h3 className='login-title'>Log in</h3>
          <div className="form-group">
              <label>Username</label>
              <input className="form-control" placeholder="Enter username" onChange={onUserChange}/>
          </div>
          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password"  onChange={onPassChange}/>
          </div>
          <button type="submit" className="submit-btn" onClick={onSubmitLogin}>Sign in</button>

          </form>
        </>
      }
      


    </div>
  )
}

export default Login;