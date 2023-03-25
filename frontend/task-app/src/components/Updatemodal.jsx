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
  import {updatetask} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import {alltasks} from '../redux/action'

const Updatemodal = ({gettasks,tname,tassignee,ttype,tstatus,tid,tsprint_id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [task,setTask]=React.useState({name:tname,assignee:tassignee,type:ttype,status:tstatus,sprint_id:tsprint_id,_id:tid})
    // console.log(task)
    const dispatch=useDispatch()
    const {loading}=useSelector((store)=>store)

    const handlehange=(e)=>{
        const {name,value}=e.target
        setTask({...task,[name]:value})
    }

    const hamdlesubmit=(e)=>{
        e.preventDefault()
        // console.log(task)
        dispatch(updatetask(task))
        .then((res)=>{
            gettasks()
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    const {name,assignee,type,status}=task
    return (
        <>
          <Button colorScheme='blue' h='30px' pl='20px' pr='20px' onClick={onOpen}>Update</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create new sprint</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input name='name' disabled value={name} ref={initialRef} placeholder='Name' />
                </FormControl>
                <FormControl mt={4}>
                <FormLabel>Type</FormLabel>
                    <Select disabled  value={type} name='type' placeholder='Select type'>
                        <option value='bug'>Bug</option>
                        <option value='feature'>Feature</option>
                        <option value='story'>Story</option>
                    </Select>
                </FormControl>
                <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                    <Select onChange={handlehange} value={status} name='status' placeholder='Select Status'>
                        <option value='to do'>To do</option>
                        <option value='in progress'>In progress</option>
                        <option value='done'>Done</option>
                    </Select>
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Assignee</FormLabel>
                  <Input onChange={handlehange} name='assignee' type='text' value={assignee} placeholder='End date' />
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button isLoading={loading} loadingText='Updating task' colorScheme='blue' onClick={hamdlesubmit} mr={3}>
                  Update
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default Updatemodal