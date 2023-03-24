import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Select
  } from '@chakra-ui/react'
  import {addtask} from '../redux/action'
import { useDispatch } from 'react-redux'


  const initialstate={
    name:'',
    assignee:'',
    type:'',
    status:'to do',
    sprint_id:''
  }
const Taskmodal = ({id,gettasks}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [task,setTask]=React.useState(initialstate)
    const dispatch=useDispatch()

    const handlechange=(e)=>{
        const {name,value}=e.target
        setTask({...task,[name]:value})
    }

    const handelsubmit=(e)=>{
        e.preventDefault()
        task.sprint_id=id
        dispatch(addtask(task))
        .then((res)=>{
            gettasks()
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    const {name,assignee,type}=task
    return (
        <>
          <Button onClick={onOpen}>Create task</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create new task</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
              <FormControl mt={4}>
                  <FormLabel>Task</FormLabel>
                  <Input onChange={handlechange} value={name} name='name' type='text' placeholder='Task' />
                </FormControl>
                <FormControl>
                  <FormLabel>Type</FormLabel>
                    <Select onChange={handlechange} value={type} name='type' placeholder='Select type'>
                        <option value='bug'>Bug</option>
                        <option value='feature'>Feature</option>
                        <option value='story'>Story</option>
                    </Select>
                </FormControl>
                <FormControl>
                  <FormLabel >Assignee name</FormLabel>
                  <Input onChange={handlechange} value={assignee} name='assignee' ref={initialRef} placeholder='Assignee name' />
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handelsubmit}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default Taskmodal