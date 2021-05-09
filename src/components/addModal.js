import React, { useState} from 'react'
import { Button, Input} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import './home.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";


export default function AddModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    if ( JSON.parse( localStorage.getItem( 'frontface' ) ) == null ) {
        localStorage.setItem( 'frontface', JSON.stringify( [] ) )
    }
    const [frontext, setfronttext] = useState( '' )
    const [backtext, setbacktext] = useState( '' )
    const [tag, settag] = useState( '' )

    function handleChange1(event) {
        setfronttext( event.target.value );
    }
    function handleChange2(event) {
        setbacktext( event.target.value );
    }
    function handleChange3( event ) {
        settag( event.target.value );
    }
    function handleSubmit( event ) {
    let frontface = JSON.parse( localStorage.getItem( 'frontface' ) )
    if ( frontface.length === 0 ) {
        frontface.push( {
        id: frontface.length + 1,
        short_story: frontext,
        short_ans: backtext,
        tags: tag
        } )
    }
    else {
        frontface.push( {
        id: frontface[frontface.length-1].id+1,
        short_story: frontext,
        short_ans: backtext,
        tags: tag
        } )
    }
    localStorage.setItem( 'frontface', JSON.stringify( frontface ) )
    console.log(JSON.parse(localStorage.getItem('frontface')))
    console.log( frontface )
    window.location.reload();
    }

    return (
      <>
        <Button onClick={onOpen} mb={4} mt={2}>Add Card</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Card</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Input variant="filled" placeholder="Type frontface short text" onChange={handleChange1} className = "inp" mt={2} />
                <Input variant="filled" placeholder="Type backface short text" onChange={handleChange2} className="inp" mt={2} />
                <Input variant="filled" placeholder="Tag"onChange={handleChange3}  className="inp" mt={2} />
            </ModalBody>
    
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={handleSubmit} type="submit">Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
