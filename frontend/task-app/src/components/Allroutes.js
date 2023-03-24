import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Projectpage from '../pages/Projectpage'
import Taskpage from '../pages/Taskpage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Projectpage/>} ></Route>
        <Route path='/:id' element={<Taskpage/>} ></Route>
    </Routes>
  )
}

export default Allroutes