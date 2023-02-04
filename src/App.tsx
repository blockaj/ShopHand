import { useState } from 'react'
import './App.css'
import DecToFrac from './components/DecToFrac.tsx';

const App:React.FC = () => {
    return (
        <div className="App">
            <DecToFrac />
        </div>
    );
}

export default App;
