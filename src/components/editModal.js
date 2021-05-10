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

export default function EditModal({idx}) {

    const [newFront, setfronttext] = useState( '' )
    const [newBack, setbacktext] = useState( '' )
    const [newTag, settag] = useState( '' )

    function handleChange1(event) {
        setfronttext( event.target.value );
    }
    function handleChange2(event) {
        setbacktext( event.target.value );
    }
    function handleChange3( event ) {
        settag( event.target.value );
    }

    const editCard = (newFront, newBack, newTag, id) => (event) => {
        let frontface = JSON.parse(localStorage.getItem('frontface'))
        console.log(frontface)
        frontface[id]["short_story"] = newFront
        frontface[id]["short_ans"] = newBack
        frontface[id]["tags"] = newTag
        localStorage.setItem( 'frontface', JSON.stringify( frontface ) ) 
        window.location.reload()
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen} mt = {12}>Edit Button</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Card</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input variant="filled" placeholder="Type new frontface short text" onChange={handleChange1} className = "inp" mt={2} />
                    <Input variant="filled" placeholder="Type new backface short text" onChange={handleChange2} className="inp" mt={2} />
                    <Input variant="filled" placeholder="new Tag"onChange={handleChange3}  className="inp" mt={2} />
                </ModalBody>
        
                <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant="ghost" onClick = {editCard(newFront, newBack, newTag, idx)} type="submit">Submit</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}