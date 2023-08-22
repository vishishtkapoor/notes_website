import React from 'react'

import {AiOutlineClose} from 'react-icons/ai'

import { useDispatch } from 'react-redux'
import { deleteNote } from '../redux/notes/notesSlice'
import EditNote from './EditNote'
import TimeAgo from './TimeAgo'



function NoteList(props) {
  const { id, title, date, color } = props

  const dispatch = useDispatch()



  return (
    <li className=' w-64 md:w-[250px]  '>

      <div className=' rounded-lg  ' style={{ backgroundColor: color }}>
      <article className='flex items-center justify-end'>
            <button className=' bg-white rounded-full p-2 cursor-pointer text-red-800 hover:text-blue-700 mt-3 mr-4'>
            <AiOutlineClose size="1rem"   onClick={() => dispatch(deleteNote({ id }))} />
            </button>
           
         

          </article>
        <div className=' p-2 h-24  '>
    
          <p className='text-white text-center'>{title}</p>
        </div>
        <div className='bg-transparent border-t border-white flex items-center justify-between p-2'>
        

          <TimeAgo timeStamp={date} />
       

          <EditNote newNoteArea={{id, title, color}}/>
        </div>
      </div>


    </li>
  )
}

export default NoteList
