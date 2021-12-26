import './login.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Login({ setLoginUser }) {
  const history = useHistory()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    console.log(process.env.REACT_APP_API_URL)

    axios.post(`${process.env.REACT_APP_API_URL}/login`, user).then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      history.push('/')
    })
  }

  return (
    <div className='container'>
      <div className='login'>
        {console.log(user)}
        <h1>Login</h1>
        <input
          type='text'
          name='email'
          value={user.email}
          onChange={handleChange}
          placeholder='Enter your Email'
        ></input>
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          placeholder='Enter your Password'
        ></input>
        <div className='button' onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className='button' onClick={() => history.push('/register')}>
          Register
        </div>
      </div>
    </div>
  )
}
