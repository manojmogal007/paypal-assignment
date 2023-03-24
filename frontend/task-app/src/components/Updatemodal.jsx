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
  } from '@chakra-ui/react'

const Updatemodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

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
                  <Input ref={initialRef} placeholder='Name' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Start date</FormLabel>
                  <Input type='date' placeholder='Start date' />
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

export default Updatemodal