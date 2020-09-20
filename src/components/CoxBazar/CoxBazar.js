import React, { useContext, useState } from 'react';
import { TourContext } from '../../App';
import './CoxBazar.css';
import fakeDataCox from '../fakeData/fakeDataCox';
import { CoxBazarContext } from '../Home/Home';



const CoxBazar = () => {

    const tourPlace = useContext(TourContext);
    const {place, setPlace} = tourPlace;
    const pl = place[0];
    const {name} = pl;

    return (
        <div className="photo1">           
            <h3>{name}</h3>
        </div>

    );
};

export default CoxBazar;