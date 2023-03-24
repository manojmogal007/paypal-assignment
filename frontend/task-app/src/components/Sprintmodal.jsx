import React from 'react'
import axios from 'axios'
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
  } from '@chakra-ui/react'
  import { url } from './url'
  import { addsprint } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import {allsprints} from '../redux/action'

  const initialstate={
    name:'',
    startDate:'',
    endDate:''
  }

const Sprintmodal = ({getsprints}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [sprint,setSprint]=React.useState(initialstate)
    const dispatch=useDispatch()
    const {loading}=useSelector((store)=>store)

    const handlechange=(e)=>{
        const {name,value}=e.target
        setSprint({...sprint,[name]:value})
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch(addsprint(sprint))
        
        .then((r)=>{
           getsprints()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const {name,startDate,endDate}=sprint
    return (
        <>
          <Button onClick={onOpen}>Create sprint</Button>
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
                  <Input value={name} onChange={handlechange} name='name' ref={initialRef} placeholder='Name' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Start date</FormLabel>
                  <Input value={startDate} onChange={handlechange} name='startDate' type='date' placeholder='Start date' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>End date</FormLabel>
                  <Input value={endDate} onChange={handlechange} name='endDate' type='date' placeholder='End date' />
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button loadingText='Creating sprint' isLoading={loading} colorScheme='blue' onClick={handlesubmit} mr={3}>
                  Create
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default Sprintmodal