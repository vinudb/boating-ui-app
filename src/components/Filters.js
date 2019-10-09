import React from 'react';

const Filters = () => (
    <div className="filters">
        <input className="text-input" type="text" placeholder="Destination" />
        <div className="checkInOutContainer">
            <input className="checkInOut text-input" type="text" placeholder="Check in" />
            <input className="checkInOut text-input" type="text" placeholder="Check out" />
        </div>
        <select className="select">
            <option>Guests</option>
            <option>1</option>
        </select>
        <button className="button">SEARCH</button>
    </div>
)

export default Filters;