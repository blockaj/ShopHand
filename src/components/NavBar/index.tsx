import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><NavLink to="/dec-to-frac">Dec To Frac</NavLink></li>
                <li><NavLink to="/gauge-meter">Gauge Meter</NavLink></li>
                <li><NavLink to="/angle-finder">AngleFinder</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;
