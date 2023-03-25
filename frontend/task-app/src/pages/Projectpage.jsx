import React from 'react'
import Sprintmodal from '../components/Sprintmodal'
import { useDispatch, useSelector } from 'react-redux'
import {allsprints} from '../redux/action'
import Project from '../components/Project'
import '../styles/Projectpage.css'



const Projectpage = () => {
    const {loading,sprints}=useSelector((store)=>store)
    
    // console.log(sprints)
    const dispatch=useDispatch()
    const getsprints=()=>{
        dispatch(allsprints())
    }
    // console.log(new Date())
    const check=()=>{
        // if(sprints[1].)
    }

    React.useEffect(()=>{
        getsprints()
    },[])
  return (
    <div>
        <div className='nav'>
            <h2>All sprints</h2>
            <Sprintmodal getsprints={getsprints}/>
        </div>
        <div className='projects'>
                {
                    sprints?.map((el)=>(
                        <Project  key={el._id} name={el.name} startDate={el.startDate} endDate={el.endDate} id={el._id} />
                    ))
                }
        </div>
    </div>
  )
}

export default Projectpage