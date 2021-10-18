import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbarcon = () => {
    return (
        <div className="con_strip">
            <div className="">
                <ul className="link_con">
                    <li>
                        <NavLink to="/repos">Repositories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/developers">Developers</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbarcon;