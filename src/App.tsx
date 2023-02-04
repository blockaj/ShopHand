import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import DecToFrac from './components/DecToFrac';


const App:React.FC = () => {
    return (
        <div className="App">
            <NavBar>
                <DecToFrac />
            </NavBar>
        </div>
    );
}

export default App;
