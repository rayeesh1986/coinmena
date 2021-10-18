import React from 'react';
const Header = ({ title, discription }) => {
    return (
        <div className="col_full center-text top_sec">
            <h1>{title}</h1>
            <p>{discription}</p>
        </div>
    );
}

export default Header;