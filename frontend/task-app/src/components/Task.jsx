import React from 'react'
import '../styles/Task.css'
import Updatemodal from './Updatemodal'

const Task = ({name,assignee,type,id,sprint_id,status,gettasks}) => {
  return (
    <div className='task'>
        <div className='name'>
            <p>{name}</p>
            <p>{type}</p>
        </div>
        <div className='type'>
            <p>to : {assignee}</p>
            <Updatemodal gettasks={gettasks} tid={id} tstatus={status} tsprint_id={sprint_id} tname={name} ttype={type} tassignee={assignee} />
        </div>
    </div>
  )
}

export default Task