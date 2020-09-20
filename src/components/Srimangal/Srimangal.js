import React, { useContext } from 'react';
import { TourContext } from '../../App';
import './Srimangal.css';

const Srimangal = () => {

    const tourPlace = useContext(TourContext);
    const {place, setPlace} = tourPlace;
    const pl = place[1];
    const {name} = pl;

    return (
        <div className="photo2">
            <h3>{name}</h3>
        </div>
    );
};

export default Srimangal;