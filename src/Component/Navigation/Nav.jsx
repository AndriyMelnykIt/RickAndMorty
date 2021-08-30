import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Locations">Locations</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav