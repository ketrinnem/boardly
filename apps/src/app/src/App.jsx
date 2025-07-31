
import './App.css'
import Header from './components/Header'
import TodoManagment from './components/TodoManagment'
import AppProvider from './context/AppContext'

function App() {



  return (
    <AppProvider>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100svh', width: '100%',  overflow: 'hidden',  }}>

          <Header />
      <div style={{marginTop: '50px'}}>
        <TodoManagment />
        </div>
      </div>
    </AppProvider>
  )
}

export default App
