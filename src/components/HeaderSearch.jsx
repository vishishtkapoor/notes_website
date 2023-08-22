import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchNote } from '../redux/notes/notesSlice'

function HeaderSearch() {
  
    const searchValue = useSelector((state) => state.notes.searchNotes)
    const dispatch = useDispatch()
    const handleSearchValue = (e) => {
        dispatch(searchNote(e.target.value.toLowerCase()))
    }
    return (
        <div className='flex flex-col items-center justify-center '>

        <h1 className=" text-xl md:text-3xl font-bold text-red-800 mb-4">Notes App</h1>
            <form className='w-64 md:w-72 lg:w-96'>
                <label className="block">
                    <input type="text" value={searchValue} name="title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Search Note"
                        onChange={(e) => handleSearchValue(e)}
                    />
                </label>

            </form>
        </div>

    )
}

export default HeaderSearch
