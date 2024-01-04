import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400 text-white '>Tailwind test</h1>
    <Card channel='chai-aur-props'  btntext='move on'/>
    <Card channel='chai-aur-props-2'  btntext='profile me'/>
    </>
  )
}

export default App
