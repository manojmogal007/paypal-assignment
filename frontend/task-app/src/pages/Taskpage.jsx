import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Task from '../components/Task'
import Taskmodal from '../components/Taskmodal'
import {alltasks} from '../redux/action'
import '../styles/Taskpage.css'

const Taskpage = () => {
  const {id}=useParams()
  const {tasks}=useSelector((store)=>store)
  const dispatch=useDispatch()

  const gettasks=()=>{
    dispatch(alltasks(id))
  }

  React.useEffect(()=>{
    gettasks()
  },[])
  return (
    <div>
        
        <div className="nav">
            <Link  to='/'><Button colorScheme='cyan' >All sprints</Button></Link>
            <Taskmodal id={id} gettasks={gettasks}/>
        </div>
        <div className="container">
            <div className="todo">
              <div className="tasks"><h4>To-do </h4></div>
              
                {
                  tasks.map((el)=>(
                    el.status==='to do'?<Task gettasks={gettasks} id={el._id} status={el.status} sprint_id={el.sprint_id} key={el._id} name={el.name} type={el.type} assignee={el.assignee} />:''
                  ))
                }
            </div>
            <div className="todo">
              <div className="tasks"> <h4>In-progress </h4></div>
           
            {
                  tasks.map((el)=>(
                    el.status==='in progress'?<Task gettasks={gettasks} id={el._id} status={el.status} sprint_id={el.sprint_id} key={el._id} name={el.name} type={el.type} assignee={el.assignee} />:''
                  ))
                }
            </div>
            <div className="todo">
              <div className="tasks"><h4>Done </h4></div>
            
            {
                  tasks.map((el)=>(
                    el.status==='done'?<Task gettasks={gettasks} id={el._id} status={el.status} sprint_id={el.sprint_id} key={el._id} name={el.name} type={el.type} assignee={el.assignee} />:''
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Taskpage