
import './App.css'
import AppProvider from './context/AppContext'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AppRouter from './routers/RootRouter';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/hello')
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  console.log(message)


  return (
    <AppProvider>
      <AppRouter/>
    </AppProvider>
  )
}

export default App
