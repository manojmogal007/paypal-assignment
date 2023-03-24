import { Button } from '@chakra-ui/react'
import React from 'react'
import '../styles/Project.css'
import { Link } from 'react-router-dom'

const Project = ({name,startDate,endDate,id}) => {

    const handleclick=()=>{
        console.log(id)
    }
  return (
    <Link to={`/${id}`} ><div className='project'>
        <p onClick={handleclick} >{name}</p>
        <p>Start : {startDate}</p>
        <p>End : {endDate}</p>
    </div></Link>
  )
}

export default Project