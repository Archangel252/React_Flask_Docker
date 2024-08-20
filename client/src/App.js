import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Flask server
    fetch('http://localhost:5000/connect')
      .then(response => response.json())
      .then(data => {
        setServerMessage(data.message); // Assuming the Flask endpoint returns a JSON with a "message" field
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setServerMessage('Failed to connect to server');
      });
  }, []); // Empty dependency array to run only once on component mount
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {serverMessage || 'Loading...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
