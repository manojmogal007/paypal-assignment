import { Button } from '@chakra-ui/react'
import React from 'react'
import '../styles/Project.css'
import { Link } from 'react-router-dom'

const Project = ({name,startDate,endDate,id}) => {

    const handleclick=()=>{
        console.log(id)
    }
  return (
    <div className='project'>
        <Link to={`/${id}`} ><p onClick={handleclick} >{name}</p></Link>
        <p>Start : {startDate}</p>
        <p>End : {endDate}</p>
        <Button>Delete</Button>
    </div>
  )
}

export default Project