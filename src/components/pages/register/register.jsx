import './register.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import validator from 'validator'

export default function Register() {
  const history = useHistory()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  // const [emailError, setEmailError] = useState('');
  // const validateEmail = (e) => {
  //     var email = e.target.value;
  //     if(validator.isEmail(email)) {
  //         setEmailError('Valid Email');
  //     } else {
  //         setEmailError('Enter valid email');
  //     }
  // }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && password === reEnterPassword) {
      if (validator.isEmail(email)) {
        // alert("Valid email");
        axios.post(`${process.env.REACT_APP_API_URL}/register`, user).then(res => {
          alert(res.data.message)
          history.push('/login')
        })
      } else {
        alert('Enter valid email')
      }
    } else {
      alert('Invlid input')
    }
  }

  return (
    <div className='container'>
      <div className='register'>
        <h1>Register</h1>
        <input type='text' name='name' value={user.name} placeholder='Your Name' onChange={handleChange}></input>
        <input type='text' name='email' value={user.email} placeholder='Your Email' onChange={handleChange}></input>
        <input
          type='password'
          name='password'
          value={user.password}
          placeholder='Enter your Password'
          onChange={handleChange}
        ></input>
        <input
          type='password'
          name='reEnterPassword'
          value={user.reEnterPassword}
          placeholder='Re-enter your Password'
          onChange={handleChange}
        ></input>
        <div className='button' onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className='button' onClick={() => history.push('/login')}>
          Login
        </div>
      </div>
    </div>
  )
}
