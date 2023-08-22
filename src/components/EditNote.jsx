
import { MdEditNote } from 'react-icons/md'

import React, { useRef, useState } from 'react'


import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,


    Textarea
} from '@chakra-ui/react'
import { useDispatch, } from 'react-redux'
import { edit } from '../redux/notes/notesSlice'

function EditNote(props) {
    const { newNoteArea } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const dispatch = useDispatch()
    const [title, setTitle] = useState(newNoteArea ? newNoteArea.title : "")


    const handleSaveEdit = (id) => {
        const newEdit = {
            title, color:newNoteArea.color, id: newNoteArea.id
        }


        dispatch(edit(newEdit))

        onClose()
    }


    return (
        <>
            <button className='bg-white rounded-lg p-2 cursor-pointer text-red-800 hover:text-blue-700  duration-500' onClick={onOpen}>   <MdEditNote size={24} /></button>


            <Modal   
                initialFocusRef={initialRef}

                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New ADD todo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Write A Notes</FormLabel>
                            <Textarea ref={initialRef} placeholder='First name' typeof='text'
                                value={title} onChange={(e) => setTitle(e.target.value)} />
                        </FormControl>


                    </ModalBody>


                    <ModalFooter>
                        <Button colorScheme='blue' onClick={handleSaveEdit} mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditNote
