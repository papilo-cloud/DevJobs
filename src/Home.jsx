import React from 'react'
import App from './App'
import { GlobalProvider } from './components/context/UserContext'

const Home = () => {
  return (
    <GlobalProvider>
        <App />        
    </GlobalProvider>
  )
}

export default Home