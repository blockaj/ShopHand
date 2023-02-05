import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'; 
import dtf from '../../assets/dtf.svg';
import gauge from '../../assets/gauge.svg';
import angle from '../../assets/angefind.svg';

const NavBar: React.FC = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><NavLink to="/dec-to-frac"><img src={dtf} /></NavLink></li>
                <li><NavLink to="/gauge-meter"><img src={gauge} /></NavLink></li>
                <li><NavLink to="/angle-finder"><img src={angle} /></NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;
