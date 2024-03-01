import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent/MainComponent'
import RegistrationForm from './components/RegistrationLoginPage/RegistrationForm'
import LoginForm from './components/RegistrationLoginPage/LoginForm'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </>
  )
}

export default App