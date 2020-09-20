import React, { useContext } from 'react';
import { TourContext } from '../../App';
import './Sundarbans.css';

const Sundarbans = () => {

    const tourPlace = useContext(TourContext);
    const {place, setPlace} = tourPlace;
    const pl = place[2];
    const {name} = pl;

    return (
        <div className="photo3">
            <h3>{name}</h3>
        </div>
    );
};

export default Sundarbans;