import React from 'react'
import '../styles/Task.css'
import Updatemodal from './Updatemodal'

const Task = ({name,assignee,type,id,sprint_id,status,gettasks}) => {
  return (
    <div className='task'>
        <p>{name}</p>
        <p>to : {assignee}</p>
        <p>{type}</p>
        <Updatemodal gettasks={gettasks} tid={id} tstatus={status} tsprint_id={sprint_id} tname={name} ttype={type} tassignee={assignee} />
    </div>
  )
}

export default Task