import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  const data = { username: username, password: password }
  axios.post("http://localhost:3001/auth/login", data).then((res) => {
    if(res.data.error) {
      alert(res.data.error)
    } else {
      sessionStorage.setItem("accessToken", res.data);
      navigate("/");
    }
  })
};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email Address</label>
        <input
          // id='email'
         // name='email'
          type='text'
          // autoComplete='on'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          // id='password'
          // name='password'
          type='password'
          // autoComplete='on'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login