import { Button } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import Taskmodal from '../components/Taskmodal'
import Updatemodal from '../components/Updatemodal'

const Taskpage = () => {
  const {id}=useParams()
  return (
    <div>
        
        <div className="nav">
            <Taskmodal/>
        </div>
        <div className="container">
            <div className="todo">

            </div>
            <div className="inprogress">

            </div>
            <div className="done">

            </div>
        </div>
    </div>
  )
}

export default Taskpage