
import './App.css'
import Header from './components/Header'
import TodoManagment from './components/TodoManagment'
import AppProvider from './context/AppContext'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/hello')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);


  return (
    <AppProvider>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100svh', width: '100%', overflowX: 'hidden', position: 'fixed', top: 0, left: 0 }}>

        <Header />
        <div style={{ width: '100%', backgroundColor: 'rgba(144, 178, 232, 0.2);', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <TodoManagment />
          {message}

        </div>

      </div>
    </AppProvider>
  )
}

export default App
