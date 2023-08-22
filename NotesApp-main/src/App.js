
import './App.css';
import AddTodo from './components/AddTodo';
import HeaderSearch from './components/HeaderSearch';
import NoteArea from './components/NoteArea';

function App() {
  return (
    <div className="m-12" >
        
        <HeaderSearch/>
        <AddTodo/>
        <NoteArea/>
    </div>
  );
}

export default App;
