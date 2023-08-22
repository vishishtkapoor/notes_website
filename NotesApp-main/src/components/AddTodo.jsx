import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames/bind'
import { addNote, changeColor } from '../redux/notes/notesSlice'
import colors from './colors.style.css'


let colorValue = classNames.bind(colors)
function AddTodo() {
    const [title, setTitle] = useState("")
    const colors = useSelector((state) => state.notes.colors)
    const dispatch = useDispatch()

    const addTitle = (e) => {
        setTitle(e.target.value)

    }
    const addColor = (id) => {
        dispatch(changeColor({ id }))
    }

    const handleAddNote = (e) => {

        e.preventDefault()
        dispatch(addNote({ title }))
        setTitle("")
    }
    return (
        <section className='m-auto max-w-[500px]'>
            <form className='p-2 md:p-4 flex flex-col w-full h-[250px] bg-white border border-blue-200 mt-5 rounded-lg'>
                <textarea rows="5" placeholder='Write A note'
                    value={title} className="text-md border-none
         outline-none p-4" onChange={addTitle}
                />
                <div className='flex flex-col md:flex-row justify-center   mt-2  md:justify-between items-center lg:mb-2  space-y-2 md:space-y-0'>
                    {
                        <ul className='flex  gap-3 lg:gap-5'>
                            {colors.map((color) => (
                                <li key={color.id} className={colorValue({
                                    colorNotes: true,
                                    active: color.isActive,
                                    reset: color?.isReset
                                })} style={{ backgroundColor: color?.backgroundColor }}
                                    onClick={() => addColor(color.id)}
                                ></li>
                            ))}
                        </ul>
                    }


                    <button type='submit' onClick={(e) => handleAddNote(e)} disabled={!title}
                        className="px-2 py-2 md:px-4 md:py-2 w-full  md:w-24  font-bold rounded-lg uppercase cursor-pointer
                        bg-gradient-to-r from-pink-200 to-[#ff5577] text-white 
                        disabled:bg-red-600 disabled:cursor-not-allowed"
                    > Add</button>

                </div>


            </form>
        </section>

    )
}

export default AddTodo
