import { useState } from 'react'
import { 
    HashRouter,
        Routes,
        Route,
} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import DecToFrac from './components/DecToFrac';
import GaugeMeter from './components/GaugeMeter';

const App:React.FC = () => {
    return (
            <HashRouter>
                <div className="App">
                    <NavBar />
                    <div className="content">
                        <Routes>
                            <Route path="/dec-to-frac" element={<DecToFrac />} />
                            <Route path ="/gauge-meter" element={<GaugeMeter/>} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>

           );
}

export default App;
