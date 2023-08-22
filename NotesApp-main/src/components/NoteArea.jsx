import React from 'react'
import { useSelector } from 'react-redux'
import NotNote from './NotNote'
import NoteList from './NoteList'
function NoteArea() {
    
    const notes = useSelector((state) => state.notes.getFiltered)

    return (
        <div className='flex items-center justify-center p-2 m-1 md:p-4 md:m-4'>

            {notes && notes !== 0 ? (<>

                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4'>
                    { notes.slice().sort((a,b)=>b.date.localeCompare(a.date)).map((note) => (
                        <NoteList key={note.id} {...note} />
                    )) 
                    }
                </ul></>) : <NotNote />}


        </div>
    )
}

export default NoteArea
