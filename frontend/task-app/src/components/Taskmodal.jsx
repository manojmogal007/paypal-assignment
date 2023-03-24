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


  const initialstate={
    name:'',
    assignee:'',
    type:'',
    status:'to do',
    sprint_id:''
  }
const Taskmodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handlechange=(e)=>{

    }

    const handelsubmit=(e)=>{
        
    }
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
              <ModalHeader>Create new sprint</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
              <FormControl mt={4}>
                  <FormLabel>Task</FormLabel>
                  <Input type='text' placeholder='Task' />
                </FormControl>
                <FormControl>
                  <FormLabel>Type</FormLabel>
                    <Select placeholder='Select type'>
                        <option value='bug'>Bug</option>
                        <option value='feature'>Feature</option>
                        <option value='story'>Story</option>
                    </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Assignee name</FormLabel>
                  <Input ref={initialRef} placeholder='Assignee name' />
                </FormControl>
                
                <FormControl mt={4}>
                  <FormLabel>End date</FormLabel>
                  <Input type='date' placeholder='End date' />
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3}>
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