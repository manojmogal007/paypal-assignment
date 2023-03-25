import { Button } from '@chakra-ui/react'
import React from 'react'
import '../styles/Project.css'
import { Link } from 'react-router-dom'

const month={
  1:'Jan',
  2:'Feb',
  3:'March',
  4:'April',
  5:'May',
  6:'June',
  7:'July',
  8:'Aug',
  9:'Sept',
  10:'Oct',
  11:'Nov',
  12:'Dec'
}

const Project = ({name,startDate,endDate,id}) => {
  const [date,setDate]=React.useState({sd:'',sm:'',sy:'',ed:'',em:'',ey:''})
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