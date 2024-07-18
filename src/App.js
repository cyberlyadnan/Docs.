import React, { useEffect, useState } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Loader from './components/Loader'

const App = () => {
  const [loading, setloading] = useState(true)

  useEffect(()=>{
    setInterval(() => {
      setloading(false)
    }, 2000);
  },[])



  if (loading){
    return <Loader />
  }


  return (
    <>
    <div className='relative w-full h-screen bg-zinc-950'>
    <Background />
    <Foreground />
    </div>
    </>
  )
}

export default App
