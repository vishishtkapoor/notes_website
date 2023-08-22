import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"



const colors = [

    {
        id: nanoid(),
        backgroundColor: "",
        isReset: true,
        isActive: true,
    },
    {
        id: nanoid(),
        backgroundColor: "#bc84ff",
        isActive: false,
    },
    {
        id: nanoid(),
        backgroundColor: "#7bff00",
        isActive: false,
    },
    {
        id: nanoid(),
        backgroundColor: "#ff007b",
        isActive: false,
    },
    {
        id: nanoid(),
        backgroundColor: "#ba9955",
        isActive: false,
    },
    {
        id: nanoid(),
        backgroundColor: "#007bff",
        isActive: false,
    },

]

const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: JSON.parse(localStorage.getItem("notes")) || [],
        getFiltered: [],
        searchNotes: "",
        colors,
        activeColor: "",


    },

    reducers: {
        addNote: (state, action) => {

            state.notes.push({
                id: nanoid(),
                title: action.payload.title,
                color: state.activeColor || "#bc2256",
                date: sub(new Date(), { minutes: 0 }).toISOString(),

            });
            state.getFiltered = [...state.notes]
            localStorage.setItem("notes", JSON.stringify(state.notes))
        },

        deleteNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload.id)
            state.getFiltered = state.notes
            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        searchNote: (state, action) => {
            state.searchNotes = action.payload;
            if (state.searchNotes !== "") {
                state.getFiltered = state.notes.filter
                    ((note) => note.title.toLowerCase()
                        .indexOf(state.searchNotes.toLowerCase()) !== -1)
            } else {
                state.getFiltered = state.notes
            }

        },

        edit: (state, action) => {
            const { id, title, color } = action.payload
            const index = state.notes.findIndex((note) => note.id === id)
            state.notes[index].title = title;
            state.notes[index].color = color;
            state.getFiltered = state.notes
        },

        changeColor: (state, action) => {
            state.colors.forEach((color) => (color.isActive = false));
            const newColor = state.colors.find((color) => color.id === action.payload.id);
            newColor.isActive = true;
            state.activeColor = newColor.backgroundColor;
        }


    }
})

export const { addNote, deleteNote, searchNote, edit, changeColor } = notesSlice.actions
export default notesSlice.reducer