import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  
  useEffect(() => {
    axios.get("http://localhost:3002").then((res) => {
      console.log(res.data);
    })
  }, [])

  let loginSuccess = () => {
    axios.post("http://localhost:3002/login", {username: "admin", password: 'admin'}).then((res) => {
      console.log(res.data);
    })
  }

  let loginFail = () => {
    axios.post("http://localhost:3002/login", {username: "non-admin", password: 'non-admin'}).then((res) => {
      console.log(res.data);
    })
  }


  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button 
          style={{marginTop: 20, backgroundColor: 'green', color: 'white'}}
          onClick={loginSuccess}
        >
          Login Successful Call
        </button>
        <button 
          style={{marginTop: 20, backgroundColor: 'red', color: 'white'}}
          onClick={loginFail}
        >
          Login Fail Call
        </button>
      </header>
    </div>
  );
}

export default App;
